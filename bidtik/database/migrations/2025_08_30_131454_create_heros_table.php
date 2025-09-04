<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('heros', function (Blueprint $table) {
            $table->id();
            $table->string('judul')->nullable();
            $table->string('gambar'); // path image
            $table->string('deskripsi')->nullable();
            $table->integer('urutan')->default(0); // untuk mengatur posisi slide
            $table->timestamps();
        });
    }
    /**
     * Reverse the migrations.
     */
       public function down(): void {
        Schema::dropIfExists('heros');
    }
};
