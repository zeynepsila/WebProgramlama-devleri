$(document).ready(function() {
    $('#myForm').submit(function(event) {
      event.preventDefault(); // Formun otomatik gönderilmesini engelle
      
      var name = $('#name').val();
      var surname = $('#surname').val();
      var email = $('#email').val();
      var password = $('#password').val();
      var phone = $('#phone').val();
      var gender = $('#gender').val();
      var birthdate = $('#birthdate').val();
      
      // Boşluk kontrolleri
      if ($.trim(name) === '') {
        alert('Ad alanı boş bırakılamaz');
        return;
      }
      
      if ($.trim(surname) === '') {
        alert('Soyad alanı boş bırakılamaz');
        return;
      }
      
      if ($.trim(email) === '') {
        alert('E-posta alanı boş bırakılamaz');
        return;
      }
      
      if ($.trim(password) === '') {
        alert('Şifre alanı boş bırakılamaz');
        return;
      }
      
      if ($.trim(phone) === '') {
        alert('Cep Telefonu alanı boş bırakılamaz');
        return;
      }
      
      if ($.trim(gender) === '') {
        alert('Cinsiyet seçimi yapılmalıdır');
        return;
      }
      
      if ($.trim(birthdate) === '') {
        alert('Doğum Tarihi alanı boş bırakılamaz');
        return;
      }
      var formData = new FormData();
      formData.append('name', name);
      formData.append('surname', surname);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('phone', phone);
      formData.append('gender', gender);
      formData.append('birthdate', birthdate);
      
      $.ajax({
        url: 'servlet_url',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
          // Başarılı işlemler sonrası yapılacaklar
          console.log(response);

        },
        error: function(xhr, status, error) {
          // Hata durumunda yapılacaklar
          console.error(error);
        }
      });
      // Tüm kontrolleri geçtiğinde formu gönder
      this.submit();
    });
  });
  