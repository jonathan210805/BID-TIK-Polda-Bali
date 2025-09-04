<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Berita;
use Illuminate\Support\Str;
use App\Models\Hero;
class BeritaController extends Controller
{
    // ----- PUBLIC -----

    // Daftar semua berita
    public function index()
    {
        $allNews = Berita::latest()->get()->map(function ($item) {
            return [
                'id'    => $item->id,
                'title' => $item->judul,
                'desc'  => Str::limit(strip_tags($item->isi), 50), // batasi preview isi
                'day'   => $item->created_at ? $item->created_at->translatedFormat('l') : null,
                'date'  => $item->created_at ? $item->created_at->format('d M Y') : null,
                'time'  => $item->created_at ? $item->created_at->format('H:i') : null,
                'img'   => $item->gambar ? '/storage/' . $item->gambar : '/polisi.jpeg',
            ];
        });

        return Inertia::render('Newspage', [
            'allNews' => $allNews
        ]);
    }

public function Homepage()
{
    $berita = Berita::latest()->take(10)->get()->map(function ($item) {
        return [
            'id'    => $item->id,
            'title' => $item->judul,
            'desc'  => Str::limit(strip_tags($item->isi), 50),
            'day'   => $item->created_at ? $item->created_at->translatedFormat('l') : null,
            'date'  => $item->created_at ? $item->created_at->format('d M Y') : null,
            'time'  => $item->created_at ? $item->created_at->format('H:i') : null,
            'img'   => $item->gambar ? '/storage/' . $item->gambar : '/polisi.jpeg',
        ];
    });

    $heros = Hero::orderBy('urutan')->get()->map(function ($item) {
        return [
            'id'        => $item->id,
            'judul'     => $item->judul,
            'deskripsi' => $item->deskripsi,
            'img'       => $item->gambar ? '/storage/' . $item->gambar : '/default-hero.jpg',
            'urutan'    => $item->urutan,
        ];
    });

    return Inertia::render('Homepage', [
        'berita' => $berita,
        'heros'  => $heros,
    ]);
}


    // Detail berita 
    public function show($id)
    {
        $berita = Berita::find($id);

        if (!$berita) {
            return redirect()->route('news.index');
        }

        $detail = [
            'id'    => $berita->id,
            'title' => $berita->judul,
            'desc'  => $berita->isi,
            'day'   => $berita->created_at ? $berita->created_at->translatedFormat('l') : null,
            'date'  => $berita->created_at ? $berita->created_at->format('d M Y') : null,
            'time'  => $berita->created_at ? $berita->created_at->format('H:i') : null,
            'img'   => $berita->gambar ? '/storage/' . $berita->gambar : '/polisi.jpeg',
        ];

        $related = Berita::where('id', '!=', $id)->latest()->take(3)->get()->map(function ($item) {
            return [
                'id'    => $item->id,
                'title' => $item->judul,
                'desc'  => Str::limit(strip_tags($item->isi), 30),
                'date'  => $item->created_at ? $item->created_at->format('d M Y') : null,
                'img'   => $item->gambar ? '/storage/' . $item->gambar : '/polisi.jpeg',
            ];
        });

        return Inertia::render('detailberita', [
            'berita'        => $detail,
            'relatedBerita' => $related
        ]);
    }

    // ----- ADMIN -----
    
    // ----- ADMIN DASHBOARD -----
public function adminDashboard()
{
    // Total semua berita
    $totalBerita = Berita::count();

    // Publish bulan ini
    $publishBulanIni = Berita::whereMonth('created_at', now()->month)->count();

    //  aktivitas terakhir
    $aktivitas = Berita::latest('updated_at')
        ->take(5)
        ->get(['id', 'judul', 'updated_at']);

    return Inertia::render('AdminDashboard', [
        'totalBerita'     => $totalBerita,
        'publishBulanIni' => $publishBulanIni,
        'aktivitas'       => $aktivitas,
    ]);
}


    public function adminIndex()
    {
        $berita = Berita::latest()->get()->map(function ($item) {
            return [
                'id'      => $item->id,
                'judul'   => $item->judul,
                'isi'     => $item->isi,
                'gambar'  => $item->gambar,
                'tanggal' => $item->created_at ? $item->created_at->format('Y-m-d') : null,
            ];
        });

        return Inertia::render('AdminNews', [
            'berita' => $berita,
        ]);
    }

    public function create()
    {
        return Inertia::render('AdminBeritaCreate');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'judul'  => 'required|string|max:255',
            'isi'    => 'required|string',
            'gambar' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('gambar')) {
            $validated['gambar'] = $request->file('gambar')->store('berita', 'public');
        }

        Berita::create($validated);

        return redirect()->route('admin.news')->with('success', 'Berita berhasil ditambahkan.');
    }
    public function edit($id)
    {
        $berita = Berita::find($id);

        if (!$berita) {
            return redirect()->route('admin.news')->with('error', 'Berita tidak ditemukan.');
        }

        return Inertia::render('AdminBeritaEdit', [
            'berita' => [
                'id'      => $berita->id,
                'judul'   => $berita->judul,
                'isi'     => $berita->isi,
                'gambar'  => $berita->gambar,
                'tanggal' => $berita->created_at ? $berita->created_at->format('Y-m-d') : null,
            ],
        ]);
    }
    public function update(Request $request, $id)
    {
        $berita = Berita::find($id);

        if (!$berita) {
            return redirect()->route('admin.news')->with('error', 'Berita tidak ditemukan.');
        }

        $validated = $request->validate([
            'judul'  => 'required|string|max:255',
            'isi'    => 'required|string',
            'gambar' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('gambar')) {
            
            if ($berita->gambar) {
                \Storage::disk('public')->delete($berita->gambar);
            }
            $validated['gambar'] = $request->file('gambar')->store('berita', 'public');
        }

        $berita->update($validated);

        return redirect()->route('admin.news')->with('success', 'Berita berhasil diperbarui.');
    }
    public function destroy($id)
    {
        $berita = Berita::find($id);

        if (!$berita) {
            return redirect()->route('admin.news')->with('error', 'Berita tidak ditemukan.');
        }

        
        if ($berita->gambar) {
            \Storage::disk('public')->delete($berita->gambar);
        }

        $berita->delete();

        return redirect()->route('admin.news')->with('success', 'Berita berhasil dihapus.');
    }
}

