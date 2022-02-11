// URL da API dentro de uma const para utilizar no código para evitar repetições.
const BASE_URL = 'https://dog.ceo/api/breed/dachshund/images/random';
//Interagindo com o DOM
const dogBtn = document.getElementById('change-dog');
const dogImg = document.getElementById('dog');

//Função da promisse para pegar as fotos da API
const getDogs = async () => {
  try{
  const data = await fetch(BASE_URL);
  const json = await data.json();
  console.log(json);
  console.log(json.message);
  return json.message;
  } catch (e){
      console.log(e.message);
    }
};

const loadImg = async () => {
  dogImg.src = await getDogs()
};

dogBtn.addEventListener('click', loadImg);

loadImg();