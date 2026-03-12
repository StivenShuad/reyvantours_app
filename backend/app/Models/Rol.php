<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rol extends Model
{
    protected $table = 'roles';

    protected $fillable = [
        'nombre',
        'descripcion',
    ];

    public function usuarioRoles()
    {
        return $this->hasMany(UsuarioRol::class, 'rol_id');
    }
}