<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SzavakController extends Controller
{
    public function szavak(){
        $szavak = DB::select('
        select *, temas.temanev from szavaks
        inner join temas on szavaks.temaId = temas.id
        ');
        return $szavak;
    }

    public function szavakTemaSzerint($tema){
        $szavak = DB::table('szavaks')
        ->select('szavaks.angol', 'szavaks.magyar')
        ->join('temas' , 'szavaks.temaId', '=', 'temas.id')
        ->where('temas.temanev', '=', $tema)
        ->get();

        return response()->json(['adottSzavak' => $szavak]);
    }
}
