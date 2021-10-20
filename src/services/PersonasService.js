import axios from 'axios';
export class PersonasService {
    constructor() {
        this.url = 'http://localhost:3000/personas';
    }
    getPersonas() {
        return axios.get(this.url);
    }
    getPersona(id) {
        return axios.get(this.url + '/' + id);
    }
    addPersona(persona) {
        return axios.post(this.url, persona);
    }
    updatePersona(persona) {
        return axios.put(this.url + '/' + persona.id, persona);
    }
    deletePersona(id) {
        return axios.delete(this.url + '/' + id);
    }
}
