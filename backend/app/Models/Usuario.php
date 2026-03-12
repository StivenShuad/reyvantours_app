<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Usuario extends Authenticatable
{
    use Notifiable;

    protected $table = 'usuarios';

    protected $fillable = [
        'nombres',
        'apellidos',
        'correo',
        'celular',
        'direccion',
        'password',
        'estado',
    ];

    protected $hidden = [
        'password',
    ];

    public function cliente()
    {
        return $this->hasOne(Cliente::class, 'usuario_id');
    }

    public function usuarioRoles()
    {
        return $this->hasMany(UsuarioRol::class, 'usuario_id');
    }
}