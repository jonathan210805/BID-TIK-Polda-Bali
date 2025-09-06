<?php

use App\Http\Controllers\BeritaController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HeroController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
/*
|--------------------------------------------------------------------------
| ROUTE PUBLIC
|--------------------------------------------------------------------------
*/

Route::get('/', [BeritaController::class, 'Homepage'])->name('home');

Route::get('/news', [BeritaController::class, 'index'])->name('news.index');
Route::get('/news/{id}', [BeritaController::class, 'show'])->name('news.show');

Route::get('/profil', fn () => Inertia::render('Profilepage'))->name('profil');

Route::get('/contact', function () {
    $contacts = [
        [
            'id' => 1,
            'name' => 'POLDA BALI',
            'whatsapp' => '081-234-567-890',
            'link' => 'https://wa.me/6281234567890'
        ],
        [
            'id' => 2,
            'name' => 'POLRES BADUNG',
            'whatsapp' => '082-345-678-901',
            'link' => 'https://wa.me/6282345678901'
        ],
        [
            'id' => 3,
            'name' => 'POLRES DENPASAR',
            'whatsapp' => '083-456-789-012',
            'link' => 'https://wa.me/6283456789012'
        ],
        [
            'id' => 4,
            'name' => 'POLRES DENPASAR',
            'whatsapp' => '083-456-789-012',
            'link' => 'https://wa.me/6283456789012'
        ],
        [
            'id' => 5,
            'name' => 'POLRES DENPASAR',
            'whatsapp' => '083-456-789-012',
            'link' => 'https://wa.me/6283456789012'
        ],
        [
            'id' => 6,
            'name' => 'POLRES DENPASAR',
            'whatsapp' => '083-456-789-012',
            'link' => 'https://wa.me/6283456789012'
        ],
        [
            'id' => 7,
            'name' => 'POLRES DENPASAR',
            'whatsapp' => '083-456-789-012',
            'link' => 'https://wa.me/6283456789012'
        ],
        [
            'id' => 8,
            'name' => 'POLRES DENPASAR',
            'whatsapp' => '083-456-789-012',
            'link' => 'https://wa.me/6283456789012'
        ],
        [
            'id' => 9,
            'name' => 'POLRES DENPASAR',
            'whatsapp' => '083-456-789-012',
            'link' => 'https://wa.me/6283456789012'
        ],
    ];

    return Inertia::render('Contact', [
        'contacts' => $contacts
    ]);
})->name('contact');

/*
|--------------------------------------------------------------------------
| ROUTE ADMIN 
|--------------------------------------------------------------------------
*/

Route::prefix('admin')->group(function () {
    Route::get('/', [BeritaController::class, 'adminDashboard'])->name('admin.dashboard');
    Route::get('/news', [BeritaController::class, 'adminIndex'])->name('admin.news');
    Route::get('/news/create', [BeritaController::class, 'create'])->name('admin.news.create');
    Route::post('/news', [BeritaController::class, 'store'])->name('admin.news.store');
    Route::get('/news/{id}/edit', [BeritaController::class, 'edit'])->name('admin.news.edit');
    Route::put('/news/{id}', [BeritaController::class, 'update'])->name('admin.news.update');
    Route::delete('/news/{id}', [BeritaController::class, 'destroy'])->name('admin.news.destroy');
    Route::get('/users', fn () => Inertia::render('AdminUsers'))->name('admin.users');
     Route::get('/hero', [HeroController::class, 'index'])->name('admin.hero');
    Route::post('/hero', [HeroController::class, 'store'])->name('admin.hero.store');

    Route::get('/register', fn () => Inertia::render('auth/register'))->name('register');
    //Route::get('/login', fn () => Inertia::render('auth/login'))->name('login');
      Route::get('login', [AuthenticatedSessionController::class, 'create'])
        ->name('login');

    
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
