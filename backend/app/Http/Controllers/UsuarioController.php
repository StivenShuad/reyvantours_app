<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    public function index()
    {
        $usuarios = Usuario::all();

        return response()->json([
            'success' => true,
            'message' => 'Lista de usuarios obtenida correctamente',
            'data' => $usuarios
        ]);
    }
}