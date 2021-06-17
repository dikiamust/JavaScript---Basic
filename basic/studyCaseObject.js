// STUDY CASE OBJECT
function Angkot(sopir, trayek, penumpang, kas){
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, penumpangBayar){
        if (this.penumpang.length === 0){
            console.log('angkot masih kosong/ belum ada penumpang');
            return false;
        }

        for (let i = 0; i < penumpang.length; i++){
            if (this.penumpang[i]== namaPenumpang){
                this.penumpang[i] = undefined;
                this.kas += penumpangBayar;
                return this.penumpang;
            }


        }
    }
}

let angkot1 = new Angkot('Cena', ['cicaheum', 'cibiru'], [], 100);
angkot1.penumpangNaik('chris')
angkot1.penumpangNaik('Rendy')
angkot1.penumpangTurun('Rendy', 5000)
console.log(angkot1)