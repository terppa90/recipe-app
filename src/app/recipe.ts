/*
Rajapintaluokka Recipe määrittää millainen reseptin täytyy olla.
Recipe-tyyppisellä oliolla on pakko olla id joka on numero ja name joka on 
merkkijono jne. Tämä on sovelluksen modelin eli tietomallin osa. Varsinainen
data muodostaa loput modelista.
*/
export interface Recipe {
  id: number;
  name: string;
  author: string;
  supplies: [
    {
      name: String;
      quantity: String;
    }
  ];
  recipe: string;
}
