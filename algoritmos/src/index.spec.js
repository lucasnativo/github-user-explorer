const algoritmos = require("./index")

/*
  *1) Implemente um método que crie um novo array baseado nos valores passados. Entradas do método (3,a), Resultado do método: ['a', 'a', 'a'].

*/ 

describe("met1", () => {
 test("Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']", () => {
   const result = algoritmos.met1(3,"a")
   const result2 = algoritmos.met1(0,"a")
   const result3 = algoritmos.met1(1,"")
   const result4 = algoritmos.met1(5,"-1")

   expect(result).toEqual(["a", "a", "a"])
   expect(result2).toEqual([])
   expect(result3).toEqual([""])
   expect(result4).toEqual(["-1", "-1", "-1", "-1", "-1"])
 }) 
})

/*

2) Implemente um método que inverta um array, não utilize métodos nativos do array. Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1].

*/ 

describe("met2", () => {
 test("Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]", () => {
   const result = algoritmos.met2([1, 2, 3, 4])
	 const result2 = algoritmos.met2([-1, -2, -3, -4])
	 const result3 = algoritmos.met2(["a", "b", "c", "d"])

   expect(result).toEqual([4, 3, 2, 1])
	 expect(result2).toEqual([-4, -3, -2, -1])
	 expect(result3).toEqual(["d", "c", "b", "a"])

 }) 
})

/*

3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]

*/

describe("met3", () => {
 test("Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]", () => {
   const result = algoritmos.met3([1, 2, "", undefined])
   const result2 = algoritmos.met3([])
   const result3 = algoritmos.met3(["", undefined, true, "test"])
   const result4 = algoritmos.met3([0, -1, -2, undefined])
   const result5 = algoritmos.met3([-10, -1, -2, null])

   expect(result).toEqual([1, 2])
   expect(result2).toEqual([])
   expect(result3).toEqual([true, "test"])
   expect(result4).toEqual([-1, -2])
   expect(result5).toEqual([-10, -1, -2])
 }) 
})

/*

4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}

*/

describe("met4", () => {
 test('Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}', () => {
   const result = algoritmos.met4([["c",2],["d",4]])
   const result2 = algoritmos.met4([[1,0],[-1,4]])
   const result3 = algoritmos.met4([["a"],["",0]])
   const result4 = algoritmos.met4([["0",-1],["d",-4]])
   const result5 = algoritmos.met4([["c", undefined],["d",null]])
   const result6 = algoritmos.met4([["c"]])
   const result7 = algoritmos.met4([])

   expect(result).toEqual({c:2, d:4})
   expect(result2).toEqual({"1":0, "-1":4})
   expect(result3).toEqual({a: undefined, "":0})
   expect(result4).toEqual({"0":-1, d:-4})
   expect(result5).toEqual({c:undefined, d:null})
   expect(result6).toEqual({c:undefined})
   expect(result7).toEqual({})
 }) 
})

/*

5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]

*/

describe("met5", () => {
 test('Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]', () => {
   const result = algoritmos.met5([5,4,3,2,5], 5,3)
   const result2 = algoritmos.met5([5,4,3,2,5], 4,2)
   const result3 = algoritmos.met5([5,4,3,2,5], -5,3)
   const result4 = algoritmos.met5([5,4,3,2,5])

   expect(result).toEqual([4,2])
   expect(result2).toEqual([5,3,5])
   expect(result3).toEqual([5,4,2,5])
   expect(result4).toEqual([5,4,3,2,5])
 }) 
})

/*

6) Implemente um método que retorne um array, sem valores duplicados.
Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]

*/

describe("met6", () => {
 test('Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]', () => {
   const result = algoritmos.met6([1,2,3,3,2,4,5,4,7,3])
   const result2 = algoritmos.met6([1,1,1,1])
   const result3 = algoritmos.met6([])

   expect(result).toEqual([1,2,3,4,5,7])
   expect(result2).toEqual([1])
   expect(result3).toEqual([])
 }) 
})

/*

7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true

*/

describe("met7", () => {
 test('Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true', () => {
   const result = algoritmos.met7([1,2,3,4],[1,2,3,4])
   const result2 = algoritmos.met7([],[])
   const result3 = algoritmos.met7([1,2,3],[1,2,3,4])
   const result4 = algoritmos.met7([4,3,2,1],[1,2,3,4])

   expect(result).toEqual(true)
   expect(result2).toEqual(true)
   expect(result3).toEqual(false)
   expect(result4).toEqual(false)
 }) 
})

/*

8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]

*/

describe("met8", () => {
 test('Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]', () => {
   const result = algoritmos.met8([1, 2, [3], [4, 5]])
   const result2 = algoritmos.met8([1, 2, [3], [4, [5, 6, [7, 8]]], 9])
   const result3 = algoritmos.met8([])

   expect(result).toEqual([1, 2, 3, 4, 5])
   expect(result2).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
   expect(result3).toEqual([])
 }) 
})

/*

9) Implemente um método divida um array por uma quantidade passada por parâmetro.
Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]

*/

describe("met9", () => {
 test('Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]', () => {
   const result = algoritmos.met9([1, 2, 3, 4, 5], 2)
   const result2 = algoritmos.met9([1, 2, 3, 4, 5], 3)
   const result3 = algoritmos.met9([1, 2, 3, 4, 5], 4)
   const result4 = algoritmos.met9([1, 2, 3, 4, 5], 1)
   const result5 = algoritmos.met9([1, 2, 3, 4, 5], 0)
   const result6 = algoritmos.met9([1, 2, 3, 4, 5], -1)

   expect(result).toEqual([[1, 2], [3, 4], [5]])
   expect(result2).toEqual([[1, 2, 3], [4, 5]])
   expect(result3).toEqual([[1, 2, 3, 4], [5]])
   expect(result4).toEqual([[1], [2], [3], [4], [5]])
   expect(result5).toEqual([1, 2, 3, 4, 5])
   expect(result6).toEqual([1, 2, 3, 4, 5])
 }) 
})

/*

10) Implemente um método que encontre os valores comuns entre dois arrays.
Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]

*/
  
describe("met10", () => {
 test('Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]', () => {
   const result = algoritmos.met10([6, 8], [8, 9])
   const result2 = algoritmos.met10([6], [8, 9])
   const result3 = algoritmos.met10([6, 8, 8], [8, 9, 8])
   const result4 = algoritmos.met10([], [8, 9])
   const result5 = algoritmos.met10([6, 8], [8, 9, 6])
   const result6 = algoritmos.met10([6, 8], [6, 8])

   expect(result).toEqual([8])
   expect(result2).toEqual([])
   expect(result3).toEqual([8])
   expect(result4).toEqual([])
   expect(result5).toEqual([6, 8])
   expect(result6).toEqual([6, 8])
 }) 
})
