<?php

use App\Models\Szavak;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('szavaks', function (Blueprint $table) {
            $table->id();
            $table->string("angol");
            $table->string("magyar");
            $table->foreignId("temaId")->references("id")->on("temas");

            $table->timestamps();
        });
        Szavak::create(["angol" =>"horse", "magyar" => "ló", "temaId" => 1]);
        Szavak::create(["angol" =>"cat", "magyar" => "macska", "temaId" => 1]);
        Szavak::create(["angol" =>"dog", "magyar" => "kutya", "temaId" => 1]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('szavaks');
    }
};
