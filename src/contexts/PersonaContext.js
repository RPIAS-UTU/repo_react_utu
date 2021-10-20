import React, {createContext, useState} from 'react';
import { PersonasService } from '../services/PersonasService';

// uso de hooks para crear el contexto
// Hooks son una nueva característica en React 16.8. 
// Estos te permiten usar el estado y otras características de React sin escribir una clase.
export const PersonaContext = createContext();
