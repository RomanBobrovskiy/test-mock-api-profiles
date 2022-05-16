const express = require('express')

const app = express()

app.get('/api/specialist', (req, res) => {
    res.json({
        name: 'Mr Mahantesh Karoshi',
        shortName: 'MK',
        text1: 'MD MRCOG, Diploma in Clinical Risk Management',
        text2: 'Obstetrics & Gynaecology',
        rating: 4.7,
        about: 'Mr. Karoshi is a Consultant Gynaecologist with over a decade of experience in utilising minimally invasive surgical techniques including laparoscopy, for the treatment of fibroids, adenomyosis, and endometriosis. His practice includes reproductive endocrinology and benign gynaecology, and he sees private patients at 108 Harley Street, London. After completing his primary medical qualification and training, Mr. Karoshi was awarded a highly sought-after fellowship by the Royal College of Obstetricians & Gynaecologists, allowing him to travel to Argentina to gain knowledge and expertise in the advanced surgical management of placental disorders, occurring in women who have undergone multiple caesareans. Since joining the specialist register in 2010, Mr. Koroshi has centred his practice around compassion and listening skills, to ensure his patients feel heard and cared for. In doing this, Mr. Karoshi can provide his patients with the most appropriate investigations to identify the root cause and also provide treatment options based on the priorities of his patients. Mr. Karoshi aims to educate his patients in his practice, allowing them to be involved in their own care at every stage. He is a firm believer in holistic treatment, and prioritses empowering his patients by listening to their problems in order to achieve the best outcomes.',
        subspecialties: ['Obstetrics', 'Reproductive Medicine', 'Uro-Gynaecology'],
        languages: ['English', 'Hindi', 'Urdu'],
        registeredWith: 'General Medical Council: 5199074'
    })
})

app.get('/api/practice', (req, res) => {
    res.json({
        name: 'The Portland Hospital',
        shortName: 'PH',
        address: '212 Great Portland Street, London, United Kingdom, W1W 5QT',
        about: 'Mr. Karoshi is a Consultant Gynaecologist with over a decade of experience in utilising minimally invasive surgical techniques including laparoscopy, for the treatment of fibroids, adenomyosis, and endometriosis. His practice includes reproductive endocrinology and benign gynaecology, and he sees private patients at 108 Harley Street, London. After completing his primary medical qualification and training, Mr. Karoshi was awarded a highly sought-after fellowship by the Royal College of Obstetricians & Gynaecologists, allowing him to travel to Argentina to gain knowledge and expertise in the advanced surgical management of placental disorders, occurring in women who have undergone multiple caesareans. Since joining the specialist register in 2010, Mr. Koroshi has centred his practice around compassion and listening skills, to ensure his patients feel heard and cared for. In doing this, Mr. Karoshi can provide his patients with the most appropriate investigations to identify the root cause and also provide treatment options based on the priorities of his patients. Mr. Karoshi aims to educate his patients in his practice, allowing them to be involved in their own care at every stage. He is a firm believer in holistic treatment, and prioritses empowering his patients by listening to their problems in order to achieve the best outcomes.',
        team: [
            { id: 1, name: 'Mr Test Test', specialty: 'Plastic Surgery', description: 'Neonatal Medicine', rating: 5, shortName: 'TT' },
            { id: 2, name: 'Mr Test Test', specialty: 'Plastic Surgery', description: 'Neonatal Medicine', rating: 5, shortName: 'TT' },
            { id: 3, name: 'Mr Test Test', specialty: 'Plastic Surgery', description: 'Neonatal Medicine', rating: 5, shortName: 'TT' },
            { id: 4, name: 'Mr Test Test', specialty: 'Plastic Surgery', description: 'Neonatal Medicine', rating: 5, shortName: 'TT' },
        ]
    })
})

app.listen(3000)
