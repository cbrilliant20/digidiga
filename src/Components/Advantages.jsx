import React from "react"
import icon1 from "../Assets/icon1.png"
import icon2 from "../Assets/icon2.png"
import icon3 from "../Assets/icon3.png"
import icon4 from "../Assets/icon4.png"
const Advantages = () => {
  const items = [
    {
      img: icon1,
      title: "UI/UX yang Ramah Pengguna",
      body: `App dan situs web Anda memiliki analogi yang sama. Pelanggan tidak akan mengunjungi toko Anda dan melihatnya buruk, dan akan langsung pergi meninggalkan website tersebut. Moto kami adalah: "Membuat Situs Web yang Ramah Pengguna" yang memudahkan pelanggan untuk bernavigasi.`,
    },
    {
      img: icon3,
      title: "Berorientasi Hasil",
      body: `Salah satu moto kami adalah 'Buat situs web yang berkontribusi pada hasil bisnis Anda'. Kami tidak hanya membuat website, kami memiliki prinsip bahwa setiap Website yang dibuat akan memberikan kontribusi untuk bisnis Anda. Kami berkomitmen untuk membantu bisnis Anda berkembang dan berkembang.`,
    },
    {
      img: icon2,
      title: "Menangani Pemrograman yang Sulit",
      body: `Kamu amu situs web Wordpress atau PHP? Kami bisa menangani keduanya. Programmer kami profesional yang sangat terampil, Bersertifikasi lembaga profesional. Bahkan dengan fungsi yang sulit atau sistem yang besar, kami siap untuk menantang diri sendiri. Untuk setiap permintaan pelanggan, kami selalu mencari solusi untuk mewujudkan hasil dan mengusulkan ide daripada mencari alasan mengapa kami tidak bisa melakukannya.`,
    },
    {
      img: icon4,
      title: "Layanan Pelanggan Profesional",
      body: `Tim kami selalu merespon dengan cepat dan tulus kepada pelanggan dengan jawaban yang benar, berdasarkan pengetahuan luas mereka yang dikoordinasikan dengan manajemen, desainer, dan pemrogram. Jika Anda memiliki masalah dengan dukungan pelanggan kami, harap segera hubungi kami. Kami bertujuan untuk menjadi mitra yang baik yang menghilangkan stres dan membantu bisnis Anda`,
    },
  ]

  return (
    <section class="bg-green pb-60 " id="advantage">
      <div class="container ">
        <h2 class="text-left py-10 text-white text-4xl leading-10 ">
          our <br />
          <span class="text-6xl font-bold ">advantages</span>
        </h2>
        <div class="grid grid-cols-2 gap-y-12 md:gap-x-24 ">
          {items.map((item, index) => {
            return (
              <div key={index} class="text-left text-gold">
                <div class="flex items-start justify-start">
                  <img src={item.img} alt="" />
                  <p class="ml-3 text-lg">{item.title}</p>
                </div>
                <p class="text-white ml-10 font-light text-sm">{item.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Advantages
