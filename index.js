const parentList = [
  {
    name: "Marcos Maia",
    children: "Clarice",
  },
  {
    name: "João Paulo",
    children: "Pedro",
  },
  {
    name: "Fernanda",
    children: "Rosa",
  },
  {
    name: "Patricia",
    children: "Ana",
  },
  {
    name: "Lucas",
    children: "Samira",
  },

]

function getParent(list, children){
   for (parent in list)
      {
            if(parent.children =  children){ return parent.name}
       }
  }

const parent = getParent(parentList, 'Pedro')

console.log(parent)

//a função deve retornar o nome do pai de acordo com o nome de seu filho passado no segundo parâmetro
