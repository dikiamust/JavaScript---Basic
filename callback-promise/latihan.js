// BERJALAN SYNCHROUNUS
const serial = async () => {
  try {
    const prom1 = await resultProm1();
    console.log(prom1);
    const prom2 = await resultProm2();
    console.log(prom2);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("success!");
  }
};

// BERJALAN ASYNCHROUNUS
const parallel = async () => {
  try {
    const prom1 = resultProm1();
    const prom2 = resultProm2();
    console.log(await prom1);
    console.log(await prom2);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("success!");
  }
};
