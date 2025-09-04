<?php

namespace App\Http\Controllers;

use App\Models\Hero;
use Inertia\Inertia;
use Illuminate\Http\Request;

class HeroController extends Controller
{
    public function index() {
        $heros = Hero::orderBy('urutan')->get();
        return Inertia::render('AdminHero', [
            'heros' => $heros,
        ]);
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'judul' => 'nullable|string|max:255',
            'deskripsi' => 'nullable|string',
            'gambar' => 'required|image|max:2048',
            'urutan' => 'nullable|integer',
        ]);

        if ($request->hasFile('gambar')) {
            $validated['gambar'] = $request->file('gambar')->store('hero', 'public');
        }

        Hero::create($validated);

        return redirect()->route('admin.hero')->with('success', 'Slide berhasil ditambahkan.');
    }
}
