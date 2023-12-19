const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function () {
    console.log(sidebar.classList);
    /*    if(sidebar.classList.contains('show-sidebar')){
           sidebar.classList.remove('show-sidebar')
       }
       else{
           sidebar.classList.add('show-sidebar');
       } */
    sidebar.classList.toggle("show-sidebar"); // Üstteki yol yerine tek satırda yazmış olduk.
});

closeBtn.addEventListener("click", function () {
    sidebar.classList.remove('show-sidebar');

})

/* AÇIKLAMALAR

classList, bir HTML elementinin sınıf özelliklerini manipüle etmek için kullanılan bir DOM özelliğidir. classList nesnesi, bir elementin sınıf listesini temsil eder ve bu liste üzerinde işlemler gerçekleştirmenizi sağlar.

classList nesnesinin temel metotları şunlardır:

1- add(className): Belirtilen sınıf adını elementin sınıf listesine ekler.
2- remove(className): Belirtilen sınıf adını elementin sınıf listesinden kaldırır.
3- toggle(className): Belirtilen sınıf adını elementin sınıf listesinde varsa kaldırır, yoksa ekler.
4- contains(className): Belirtilen sınıf adının elementin sınıf listesinde olup olmadığını kontrol eder.
5- item(index): Belirtilen sıradaki sınıf adını döndürür.
6- length: Elementin sınıf listesinde bulunan sınıf sayısını döndürür.
Bu metotları kullanarak, JavaScript ile HTML elementlerinin sınıf listelerini dinamik olarak yönetebilirsiniz. Örneğin, bir elemente bir sınıf eklemek veya kaldırmak için add ve remove metotlarını kullanabilirsiniz. 
toggle metoduyla ise sınıfın varlığını kontrol edebilir ve varsa kaldırabilir, yoksa ekleyebilirsiniz.

 */