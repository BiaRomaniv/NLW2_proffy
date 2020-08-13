const database = require('./db')
const createProffy = require('./createProffy')

database.then( async (db) => {
    //inserir dados
    
    proffyValue = {
        name: 'Mayk',
        avatar: 'https://avatars0.githubusercontent.com/u/66280875?s=460&u=7c35abe527be16c89162449631eb37d986555a96&v=4',
        whatsapp: '4199999999',
        bio: 'prof ed. fisica',
        
    }

    classValue = {
        subject: 1,
        cost: '20',
        //proffy id vira pelo banco de dados
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]
  //  await createProffy(db, {proffyValue, classValue, classScheduleValues})

  //consultar os dados inseridos
  //todos os proffys
  const selectedproffys = await db.all("SELECT * FROM proffys")
 // console.log(selectedproffys)

  //consuktar as classes de um determinado professor e os dados do professor
  const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
  const selectClassesSchedules = await db.all(`
        SELECT classes_schedule.*
        FROM classes_schedule
        WHERE classes_schedule.class_id = "1"
        AND classes_schedule.weekday = "0
        AND classes_schedule.time_from <= "520"
        AND classes_schedule.time_to > "520"
    `)

})
