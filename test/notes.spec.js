import MockFirebase from 'mock-cloud-firestore';

import { addNote, getNotes, deleteNote } from '../src/firebase/note.js';

const fixtureData = {
  __collection__: {
    notes: {
      __doc__: {
        abc1d: {
          title: 'terminar la pildora',
          complete: false,
        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

describe('lista de notas', () => {
  it('Debería poder agregar una nota', done => addNote('preparar la pildora', false)
    .then(() => getNotes(
      (data) => {
        const result = data.find(note => note.title === 'preparar la pildora');
        expect(result.title).toBe('preparar la pildora');
        done();
      },
    )));
  it('Debería poder eliminar una nota', done => deleteNote('abc1d')
    .then(() => getNotes(
      (data) => {
        const result = data.find(note => note.id === 'abc1d');
        expect(result).toBe(undefined);
        done();
      },
    )));
});
