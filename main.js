const dropdownMenu = document.querySelector('.dropdown-menu');
function Menu(e){
    e.name === 'menu-outline'
    ? (e.name = "close-outline", dropdownMenu.classList.add('open'))
    : (e.name = "menu-outline", dropdownMenu.classList.remove('open'))
}

document.addEventListener('scroll',  ()=> {
  const navbar = document.querySelector('.navbar-content');

  if(window.scrollY > 0){
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
});

const khodamList = [
    "Kosong",
    "Harimau",
    "Serigala Hitam",
    "Naga Hijau",
    "Kuda Hitam",
    "Buaya Rawa",
    "Burung Merak",
    "Gajah",
    "Rubah Merah",
    "Hiu Putih",
    "Burung Hantu",
    "Paus Biru",
    "Kerbau Putih",
    "Kucing Hitam",
    "Kuda Laut",
    "Beruang Coklat",
    "Zebra",
    "Serigala Putih",
    "Gorila",
    "Lumba-Lumba",
    "Merpati Putih",
    "Burung Kakatua",
    "Kucing Merah",
    "Anjing Hitam",
    "Gagak Hitam",
    "Penyu",
    "Kambing Gunung",
    "Ikan Pari",
    "Macan Putih",
    "Banteng Merah",
    "Kera Hitam",
    "Burung Hantu Putih",
  ];

  const khodamDescriptions = {
    "Kosong": "Anda tidak memiliki khodam.",
    "Harimau": "Orang yang memiliki khodam Harimau berwatak tegas dan berani, dengan aura yang misterius.",
    "Serigala Hitam": "Orang yang memiliki khodam Serigala Hitam berwatak setia dan penuh rahasia, dengan insting yang tajam.",
    "Naga Hijau": "Orang yang memiliki khodam Naga Hijau berwatak bijaksana dan memiliki kekuatan besar serta keajaiban.",
    "Kuda Hitam": "Orang yang memiliki khodam Kuda Hitam berwatak bebas dan penuh kekuatan, dengan semangat yang tak tergoyahkan.",
    "Buaya Rawa": "Orang yang memiliki khodam Buaya Rawa berwatak tangguh dan penuh strategi, dengan ketahanan yang luar biasa.",
    "Burung Merak": "Orang yang memiliki khodam Burung Merak berwatak elegan dan penuh kebanggaan, dengan daya tarik yang luar biasa.",
    "Gajah": "Orang yang memiliki khodam Gajah berwatak kuat dan penuh kebijaksanaan, dengan kekuatan yang luar biasa.",
    "Rubah Merah": "Orang yang memiliki khodam Rubah Merah berwatak cerdas dan penuh kelicikan, dengan insting yang tajam.",
    "Hiu Putih": "Orang yang memiliki khodam Hiu Putih berwatak tangguh dan penuh strategi, dengan kekuatan yang menakutkan.",
    "Burung Hantu": "Orang yang memiliki khodam Burung Hantu berwatak cerdas dan penuh misteri, dengan kemampuan melihat hal-hal tersembunyi.",
    "Paus Biru": "Orang yang memiliki khodam Paus Biru berwatak tenang dan penuh kebijaksanaan, dengan kekuatan yang luar biasa.",
    "Kerbau Putih": "Orang yang memiliki khodam Kerbau Putih berwatak kuat dan penuh ketekunan, dengan kesetiaan yang tak tergoyahkan.",
    "Kucing Hitam": "Orang yang memiliki khodam Kucing Hitam berwatak lincah dan penuh misteri, dengan ketenangan yang menenangkan.",
    "Kuda Laut": "Orang yang memiliki khodam Kuda Laut berwatak tenang dan penuh keindahan, dengan daya adaptasi yang tinggi.",
    "Beruang Coklat": "Orang yang memiliki khodam Beruang Coklat berwatak kuat dan penuh kasih sayang, dengan ketahanan yang luar biasa.",
    "Zebra": "Orang yang memiliki khodam Zebra berwatak bebas dan penuh semangat, dengan keindahan yang unik.",
    "Serigala Putih": "Orang yang memiliki khodam Serigala Putih berwatak setia dan penuh ketenangan, dengan insting yang tajam.",
    "Gorila": "Orang yang memiliki khodam Gorila berwatak kuat dan penuh kebijaksanaan, dengan kekuatan yang luar biasa.",
    "Lumba-Lumba": "Orang yang memiliki khodam Lumba-Lumba berwatak cerdas dan penuh keceriaan, dengan kemampuan beradaptasi yang tinggi.",
    "Merpati Putih": "Orang yang memiliki khodam Merpati Putih berwatak damai dan penuh kasih sayang, dengan kesetiaan yang luar biasa.",
    "Burung Kakatua": "Orang yang memiliki khodam Burung Kakatua berwatak ceria dan penuh keingintahuan, dengan kecerdasan yang tinggi.",
    "Kucing Merah": "Orang yang memiliki khodam Kucing Merah berwatak lincah dan penuh semangat, dengan keberanian yang besar.",
    "Anjing Hitam": "Orang yang memiliki khodam Anjing Hitam berwatak setia dan penuh ketegasan, dengan insting yang tajam.",
    "Gagak Hitam": "Orang yang memiliki khodam Gagak Hitam berwatak cerdas dan penuh misteri, dengan kemampuan melihat hal-hal tersembunyi.",
    "Penyu": "Orang yang memiliki khodam Penyu berwatak tenang dan penuh kebijaksanaan, dengan ketahanan yang luar biasa.",
    "Kambing Gunung": "Orang yang memiliki khodam Kambing Gunung berwatak tangguh dan penuh keberanian, dengan kemampuan beradaptasi yang tinggi.",
    "Ikan Pari": "Orang yang memiliki khodam Ikan Pari berwatak tenang dan penuh misteri, dengan kemampuan beradaptasi yang tinggi.",
    "Macan Putih": "Orang yang memiliki khodam Macan Putih berwatak pemberani dan kuat, dengan aura yang mempesona.",
    "Banteng Merah": "Orang yang memiliki khodam Banteng Merah berwatak kuat dan penuh ketegasan, dengan kekuatan yang tak tertandingi.",
    "Kera Hitam": "Orang yang memiliki khodam Kera Hitam berwatak cerdas dan penuh keceriaan, dengan kecerdasan yang tinggi.",
    "Burung Hantu Putih": "Orang yang memiliki khodam Burung Hantu Putih berwatak cerdas dan penuh misteri, dengan kemampuan melihat hal-hal tersembunyi.",
  };

  function generateKhodam() {
    const name = document.getElementById("search").value.trim();
    if (name === "") {
      alert("Masukkan namamu terlebih dahulu!");
      return false;
    }
    
    const randomIndex = Math.floor(Math.random() * khodamList.length);
    const khodam = khodamList[randomIndex];
    
    document.getElementById("result").innerText = `Khodam Kamu adalah ${khodam}`;
    document.getElementById("khodam-img").src = `img/${khodam.toLowerCase().replace(' ', '_')}.png`;
    document.getElementById("description").innerText = khodamDescriptions[khodam];
    return false;
  }