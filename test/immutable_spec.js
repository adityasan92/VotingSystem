import {expect} from 'chai';
import {List, Map} from 'immutable';

describe('immutability', ()=>{

    describe('A List', ()=>{

      function addMovie(currentState, movie){
        return currentState.update('movies', movies=>movies.push(movie));
      }

      it('is immutable',()=>{
        let state = Map({movies:List.of("Interstellar","Star Wars")});
        let nextState = addMovie(state,"Dark Night");

        expect(nextState).to.equal(Map({
          movies: List.of(
          "Interstellar",
          "Star Wars",
          "Dark Night"
          )
        }));
        expect(state).to.equal(Map({ 
          movies: List.of(
          "Interstellar",
          "Star Wars",
          )
        }));

      });

    });
});
