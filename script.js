/* หมอเข้าใจ - Word Page Script */
const words = [
    { key: "head", thai: "หัว", english: "Head" },
    { key: "cough", thai: "ไอ", english: "Cough" },
    { key: "patient", thai: "ผู้ป่วย", english: "Patient" },
    { key: "pain", thai: "ปวด", english: "Pain" },
    { key: "sorethroat", thai: "เจ็บคอ", english: "Sore throat" },
    { key: "swelling", thai: "บวม", english: "Swelling" },
    { key: "wound", thai: "แผล", english: "Wound" },
    { key: "headache", thai: "ปวดหัว", english: "Headache" },
    { key: "chestpain", thai: "เจ็บหน้าอก", english: "Chest pain" },
    { key: "bleeding", thai: "เลือดออก", english: "Bleeding" },
    { key: "emergencyroom", thai: "ห้องฉุกเฉิน", english: "Emergency Room" },
    { key: "stomachache", thai: "ปวดท้อง", english: "Stomachache" },
    { key: "hospital", thai: "โรงพยาบาล", english: "Hospital" },
    { key: "nurse", thai: "พยาบาล", english: "Nurse" },
    { key: "examinationroom", thai: "ห้องตรวจ", english: "Examination Room" },
    { key: "breathing", thai: "หายใจไม่ออก", english: "Shortness of breath" },
    { key: "pharmacy", thai: "ห้องยา", english: "Pharmacy" },
    { key: "operatingroom", thai: "ห้องผ่าตัด", english: "Operating Room" },
    { key: "nausea", thai: "คลื่นไส้", english: "Nausea" },
    { key: "difficultybreathing", thai: "หายใจลำบาก", english: "Difficulty breathing" },
    { key: "fever", thai: "ไข้", english: "Fever" },
    { key: "appointment", thai: "นัดหมาย", english: "Appointment" },
    { key: "vomiting", thai: "อาเจียน", english: "Vomiting" },
    { key: "diarrhea", thai: "ท้องเสีย", english: "Diarrhea" },
    { key: "injury", thai: "บาดเจ็บ", english: "Injury" },
    { key: "allergy", thai: "ภูมิแพ้", english: "Allergy" },
    { key: "infection", thai: "การติดเชื้อ", english: "Infection" }
];

document.addEventListener("DOMContentLoaded", () => {
    const wordKey = (document.body.dataset.word || "").toLowerCase();
    const word = words.find(item => item.key === wordKey);
    if (!word) return;
    const title = document.getElementById("word-title");
    const english = document.getElementById("word-english");
    const meaning = document.getElementById("word-meaning");
    if (title) title.textContent = word.thai;
    if (english) english.textContent = word.english;
    if (meaning) meaning.textContent = word.thai;
});
