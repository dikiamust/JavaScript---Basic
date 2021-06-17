const fungsi1 = (cb) => {
    console.log("fungsi1");
    cb();
}

const fungsi2 = () => {
    console.log("fungsi2");
}

fungsi1(fungsi2);