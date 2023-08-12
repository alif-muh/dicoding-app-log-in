loginFormElement.addEventListener('submit', function (event) {
  event.preventDefault();

  // TODO 1 : Mendapatkan input email dan password pengguna dari form
  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;

  /*  TODO 2 : Buat Logika perbandingan dengan kondisi:
        Jika variabel email identik dengan expectedEmail dan password identik dengan expectedPassword,
        panggil fungsi goToHome()
        Jika tidak, maka panggil fungsi showPopUp()
     */
  if (email == expectedEmail && password == expectedPassword) {
    goToHome();
  } else {
    showPopUp();
  }
});
