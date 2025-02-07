const PromiseTest = () => {
  // const bool1 = false;
  // const promise1 = new Promise(function(resolve, reject) {
  //     if (bool1) {
  //         resolve("it`s true")
  //     } else {
  //         reject("it`s false")
  //     }
  // })

  // console.log(promise1)

  // const promise2 = new Promise(function(resolve, reject) {
  //     setTimeout(function() {
  //       resolve({
  //         message: "The man likes to keep his word",
  //         code: "aManKeepsHisWord"
  //       });
  //     }, 10 * 1000);
  //   });

  //   console.log(promise2);
  // const chainPromises = () => {
  //   delayedMessage("первое", 1500)
  //       .then((msg) => {
  //           console.log(msg);
  //           return delayedMessage("второе", 2000);
  //       })
  //       .then((msg) => {
  //           console.log(msg);
  //           return delayedMessage("третье", 2500);
  //       })
  //       .then(console.log)
  //       .catch(console.error);
  // };

  // const delayedMessage = (message, delay) => {
  //   return new Promise((resolve, reject) => {
  //       if (delay < 1000) {
  //           reject("Задержка меньше 1 секунды");
  //       } else {
  //           setTimeout(() => {
  //               resolve(message);
  //           }, delay);
  //       }
  //   });
  // }

  // delayedMessage("3 сек", 3000)
  //   .then((msg) => {
  //     console.log(msg)
  //     return delayedMessage("4 сек", 4000)
  //   })
  //   .then((msg) => {
  //     console.log(msg)
  //     return delayedMessage("3 сек", 3000)
  //   })
  //   .then(console.log)
  //   .catch(console.error)
  //   .finally(() => {
  //     console.log("промис завершился")
  //   })

  // const runMultiplePromises = () => {
  //   const p1 = delayedMessage("первое", 2500)
  //   const p2 = delayedMessage("второе", 2000)
  //   const p3 = delayedMessage("третье", 2500)
    
  //   Promise.all([p1, p2, p3])
  //     .then(console.log)
  //     .catch(console.error)
    
  //   Promise.race([p1, p2, p3])
  //     .then(console.log)
  //     .catch(console.error)
  // }


  // runMultiplePromises()

  // const fetchUserData = (userId) => {
  //   return new Promise((resolve, reject) => {
  //     if (userId < 1) {
  //       reject("Некорректный ID пользователя")
  //     } else {
  //       setTimeout(resolve({
  //         id: userId,
  //         name: "Пользователь " + userId
  //       }), 2000)
  //     }
  //   })
  // }

  // fetchUserData(1)
  //   .then(console.log)
  //   .catch(console.error)

  // const processNumber = (num) => {
  //   console.log("Начальное значение: " + num)

  //   return new Promise((resolve) => {
  //     console.log(`умножаем на 2...`)
  //     setTimeout(() => {
  //       const res = num * 2;
  //       console.log(res)
  //       resolve(res)
  //     }, 1000)
  //   })
  //   .then((res) => new Promise((resolve) => {
  //     console.log(`прибавляем 3...`)
  //     setTimeout(() => {
  //       res = res + 3;
  //       console.log(res)
  //       resolve(res)
  //     }, 1500)
  //   }))
  //   .then((res) => new Promise((resolve) => {
  //     console.log(`вовзодим в квадрат...`)
  //     setTimeout(() => {
  //       res = res * res;
  //       console.log(res)
  //       resolve(res)
  //     }, 2000)
  //   }))
  // }

  // processNumber(5)

  // const fetchUser = () => new Promise(resolve => setTimeout(() => resolve("👤 User"), 1000));
  // const fetchPosts = () => new Promise((_, reject) => setTimeout(() => reject("❌ Ошибка загрузки постов"), 1500));
  // const fetchComments = () => new Promise(resolve => setTimeout(() => resolve("💬 Comments"), 2000));

  // const loadData = () => {
  //   Promise.allSettled([fetchUser(), fetchPosts(), fetchComments()])
  //       .then(results => {
  //           console.log("📊 Результаты загрузки:", results);
  //       });
  // }

  // loadData()

  

  return (
      <div>
          
      </div>
  )
}
export default PromiseTest