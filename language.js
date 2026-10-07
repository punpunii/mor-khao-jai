/* MOR KHAO JAI — Language Switcher
   Thai / English
*/
(function () {
  const dict = {
    'หมอเข้าใจ': 'MOR KHAO JAI',
    'Healthcare Communication': 'Healthcare Communication',

    '← กลับ': '← Back',
    '← กลับหน้าหลัก': '← Back to Home',
    '← กลับเกม': '← Back to Game',

    'ไทย': 'Thai',
    'EN': 'EN',
    '中文': 'Chinese',
    '日本語': 'Japanese',

    'ปุ่มเปลี่ยนภาษา': 'Language switcher',
    'ระบบภาษา': 'Language system',
    'การได้ยิน': 'Hearing',
    'คู่มือสื่อสารกับผู้ป่วย': 'Communication guide for staff',

    /* Main categories */
    'คลังภาษามือสุขภาพ': 'Health Sign Language Library',
    'คลังเรียนภาษามือ': 'Health Sign Language Library',
    'คลังศัพท์สุขภาพ': 'Health Sign Language Library',

    'การสื่อสารและบัตรช่วยสื่อสาร': 'Communication & Communication Card',
    'วิธีการสื่อสาร': 'Communication & Communication Card',
    'บัตรช่วยสื่อสาร': 'Communication & Communication Card',

    'ฝึกพูดและออกเสียง': 'Speech & Pronunciation Practice',
    'ฝึกพูด': 'Speech Practice',
    'ออกเสียง': 'Pronunciation',

    'บอกอาการก่อนพบแพทย์': 'Symptom Form',
    'รายงานปัญหา / ข้อเสนอแนะ': 'Report a Problem / Feedback',

    'เกมภาษามือ': 'Sign Language Game',
    'จัดอันดับ': 'Leaderboard',
    'จัดอันดับเกมภาษามือ': 'Sign Language Game Leaderboard',
    'LEADERBOARD': 'LEADERBOARD',

    /* General */
    'โรงพยาบาล': 'Hospital',
    'อาการ': 'Symptoms',
    'ร่างกาย': 'Body',
    'ร่างกายและอวัยวะ': 'Body & Organs',
    'โรคและภาวะสุขภาพ': 'Diseases & Conditions',
    'การตรวจ': 'Medical Tests',
    'การรักษา': 'Treatment',
    'การติดตามอาการ': 'Follow-up',

    'อวัยวะภายนอก': 'External Body Parts',
    'อวัยวะภายใน': 'Internal Organs',

    /* Roles */
    'ผู้ป่วย': 'Patient',
    'แพทย์': 'Doctor',
    'หมอ': 'Doctor',
    'บุคลากรทางการแพทย์': 'Healthcare Staff',
    'พยาบาล': 'Nurse',
    'คนทั่วไป': 'Everyone',

    'สำหรับผู้ป่วย': 'For Patients',
    'สำหรับบุคลากรทางการแพทย์': 'For Healthcare Staff',
    'สำหรับคนทั่วไป': 'For Everyone',

    /* Body */
    'หู': 'Ear',
    'ตา': 'Eye',
    'จมูก': 'Nose',
    'ปาก': 'Mouth',
    'คอ': 'Neck',
    'ผิวหนัง': 'Skin',
    'สมอง': 'Brain',
    'หัวใจ': 'Heart',
    'ปอด': 'Lungs',
    'กระเพาะอาหาร': 'Stomach',
    'ลำไส้': 'Intestine',
    'ตับ': 'Liver',
    'ไต': 'Kidneys',
    'เลือด': 'Blood',
    'หลอดเลือด': 'Blood Vessels',

    /* Symptoms */
    'ปวด': 'Pain',
    'ปวดหัว': 'Headache',
    'ปวดท้อง': 'Stomachache',
    'ไข้': 'Fever',
    'ไอ': 'Cough',
    'เวียนหัว': 'Dizziness',
    'คลื่นไส้': 'Nausea',
    'อาเจียน': 'Vomiting',
    'เจ็บหน้าอก': 'Chest Pain',
    'หายใจลำบาก': 'Difficulty Breathing',
    'หายใจไม่ออก': 'Shortness of Breath',
    'บวม': 'Swelling',
    'เลือดออก': 'Bleeding',
    'ท้องเสีย': 'Diarrhea',
    'แผล': 'Wound',
    'บาดเจ็บ': 'Injury',
    'เจ็บคอ': 'Sore Throat',
    'ภูมิแพ้': 'Allergy',

    /* Diseases */
    'เบาหวาน': 'Diabetes',
    'โรคเบาหวาน': 'Diabetes',
    'ความดันโลหิตสูง': 'Hypertension',
    'หอบหืด': 'Asthma',
    'การติดเชื้อ': 'Infection',
    'นอนโรงพยาบาล': 'Hospitalization',

    /* Tests / Treatment */
    'ตรวจร่างกาย': 'Physical Examination',
    'ตรวจเลือด': 'Blood Test',
    'วัดความดัน': 'Blood Pressure',
    'ตรวจปัสสาวะ': 'Urine Test',
    'เอกซเรย์': 'X-ray',
    'อัลตราซาวด์': 'Ultrasound',
    'ผ่าตัด': 'Surgery',
    'ยา': 'Medicine',
    'ฉีดยา': 'Injection',

    /* Communication */
    'การสื่อสาร': 'Communication',
    'เขียน': 'Writing',
    'พิมพ์': 'Typing',
    'ภาษามือ': 'Sign Language',
    'อ่านปาก': 'Lip Reading',
    'พูดชัดเจน': 'Speak Clearly',
    'ทำซ้ำ': 'Repeat',
    'เข้าใจ': 'Understand',

    /* Follow-up */
    'อาการดีขึ้น': 'Symptoms Are Better',
    'อาการแย่ลง': 'Symptoms Are Worse',
    'ยังมีอาการ': 'Still Have Symptoms',
    'นัดติดตาม': 'Follow-up Appointment',

    /* Profile */
    'ข้อมูลเบื้องต้น': 'Basic Information',
    'ก่อนเริ่มใช้งาน': 'Before You Begin',
    'ต้องการให้เราเรียกคุณว่าอะไรคะ?': 'What would you like us to call you?',
    'ชื่อที่ต้องการให้เรียก': 'Name you would like to be called',
    'อายุ': 'Age',
    'ช่วงอายุ': 'Age Group',
    'ต่ำกว่า 12 ปี': 'Under 12 years',
    '12–17 ปี': '12–17 years',
    '18–24 ปี': '18–24 years',
    '25–39 ปี': '25–39 years',
    '40–59 ปี': '40–59 years',
    '60 ปีขึ้นไป': '60 years and above',
    'ไม่ระบุ': 'Prefer not to say',
    'ข้อมูลนี้ใช้เพื่อปรับประสบการณ์การใช้งานในหน้านี้เท่านั้น':
      'This information is only used to personalize your experience on this page.',
    'ข้ามและดูเมนูทั้งหมด': 'Skip and view all topics',
    'ไปต่อ': 'Continue',

    /* Vocabulary */
    'วิดีโอภาษามือ': 'Sign Language Video',
    'คำศัพท์ภาษามือ': 'Sign Language Vocabulary',
    'ความหมาย': 'Meaning',
    'เรียนรู้ภาษามือ': 'Learn Sign Language',
    'ฝึกสื่อสาร': 'Practice Communication',
    'ใช้ในการสื่อสาร': 'For Communication',
    'ฝึกทำตาม': 'Follow Along',
    'ดูวิดีโอแล้วลองทำภาษามือตาม': 'Watch the video and try the sign yourself.',
    'เลือกอวัยวะที่ต้องการเรียนรู้': 'Choose an organ to learn',

    /* Communication card */
    'เครื่องมือช่วยสื่อสาร': 'Communication Tools',
    'วิธีสื่อสารที่ฉันสะดวก': 'My preferred communication methods',
    'สิ่งที่อยากให้บุคลากรทางการแพทย์ทราบ':
      'Anything you want healthcare staff to know',
    'สร้างบัตรของฉัน': 'Create My Card',
    'บัตรของฉัน': 'My Card',
    'ตัวอย่างบัตร': 'Card Preview',
    'คัดลอกข้อความบนบัตร': 'Copy Card Text',
    'พิมพ์บัตร': 'Print Card',
    'สร้าง': 'Create',

    'ฉันต้องการ': 'I need',
    'การสื่อสารที่ชัดเจน': 'Clear communication',
    'ฉันมีข้อจำกัดด้านการได้ยิน': 'I have a hearing difficulty',
    'กรุณาหันหน้าเข้าหาฉัน': 'Please face me',
    'และสื่อสารอย่างชัดเจน': 'and communicate clearly',

    'เลือกวิธีการสื่อสารที่สะดวก เพื่อช่วยให้บุคลากรทางการแพทย์เข้าใจความต้องการของคุณ':
      'Choose the communication methods that work for you so healthcare staff can understand your needs.',

    'การใช้โทรศัพท์หรืออุปกรณ์ดิจิทัลพิมพ์ข้อความเพื่อช่วยสื่อสาร':
      'Using a phone or digital device to type messages and support communication',

    'ขอพิมพ์ข้อความเพื่อสื่อสารได้ไหม':
      'Could I type a message to communicate?',

    'บัตรนี้เป็นต้นแบบเพื่อช่วยสื่อสารความต้องการของผู้ใช้ ไม่ใช่เอกสารยืนยันความพิการหรือใช้แทนการประเมินของบุคลากรทางการแพทย์':
      'This card is a prototype to help communicate the user’s needs. It is not proof of disability and does not replace assessment by healthcare professionals.',

    /* Speaking */
    'ฝึกคำศัพท์สุขภาพ': 'Practice Health Vocabulary',
    'ดูปากแล้วพูดตาม': 'Watch the mouth and repeat',
    'ลองพูดตาม': 'Try to repeat',
    'คำศัพท์สุขภาพ': 'Health Vocabulary',
    'ความคืบหน้า': 'Progress',

    /* Game */
    'ตอบ 5 ข้อ จับเวลา และจัดอันดับ':
      'Answer 5 questions, race the clock, and rank on the leaderboard',
    'ล้างคะแนนในเครื่องนี้': 'Clear scores on this device',

    /* Descriptions */
    'ทุกกลุ่มผู้ใช้งานสามารถเข้ามาเรียนรู้คลังศัพท์เดียวกันได้':
      'All user groups can learn from the same vocabulary library.',

    'รวมคำศัพท์สำหรับทุกกลุ่มผู้ใช้งาน':
      'Vocabulary for all user groups',

    'เรียนรู้วิธีสื่อสารที่เหมาะกับแต่ละคน':
      'Learn communication methods that fit each person',

    'เรียนรู้ภาษามือและการสื่อสารด้านสุขภาพโดยไม่จำกัดว่าต้องเป็นผู้ป่วยหรือบุคลากร':
      'Learn sign language and healthcare communication whether you are a patient, healthcare worker, or neither.',

    'โรงพยาบาล อาการ ร่างกาย โรค การตรวจ และการรักษา':
      'Hospital, symptoms, body, diseases, tests, and treatment',

    'คำศัพท์เกี่ยวกับอาการที่ผู้ป่วยรู้สึกหรือสังเกตได้':
      'Vocabulary for symptoms that patients may feel or notice.',

    'อาการแย่ลงกว่าเดิม':
      'Symptoms are worse than before',

    'การสื่อสารที่ชัดเจนขึ้น':
      'Clearer communication',

    'เครื่องมือช่วยให้การสื่อสารในโรงพยาบาลชัดเจนขึ้น':
      'Tools to make communication in hospitals clearer',

    'เรียนรู้ภาษามือ คำศัพท์สุขภาพ และเครื่องมือช่วยสื่อสารสำหรับผู้ป่วย บุคลากรทางการแพทย์ และคนทั่วไป':
      'Learn sign language, health vocabulary, and communication tools for patients, healthcare staff, and everyone.',

    'คุณเข้ามาในฐานะไหน?':
      'What brings you to MOR KHAO JAI?',

    'เลือกเพื่อให้เราแนะนำหัวข้อที่เหมาะกับคุณ':
      'Choose a profile so we can recommend suitable topics.',

    'หัวข้อทั้งหมด': 'All Topics',

    'ฟังก์ชันนี้จะเปิดใช้งานในอนาคต':
      'This feature will be available in the future',

    'แจ้งข้อมูลให้โรงพยาบาล':
      'Send Information to Hospital',

    '“หมอให้ไปตรวจอัลตราซาวด์”':
      '“The doctor asked me to have an ultrasound.”',

    'แพทย์ หรือผู้ประกอบวิชาชีพเวชกรรม':
      'A physician or medical practitioner',

    'ลองฝึกใช้คำว่า “ปวดหัว” เพื่อบอกอาการกับบุคลากรทางการแพทย์':
      'Practice using “headache” to describe a symptom to healthcare staff.',

    'ลองฝึกใช้คำว่า “เบาหวาน” ในการสื่อสารกับบุคลากรทางการแพทย์':
      'Practice using “diabetes” when communicating with healthcare staff.',

    'ลองฝึกใช้คำว่า “เจ็บคอ” เพื่อบอกอาการกับบุคลากรทางการแพทย์':
      'Practice using “sore throat” to describe a symptom to healthcare staff.',
    /* Added for stable Thai/English switching */
    'เรียนรู้ภาษามือ': 'Learn Sign Language',
    'คลังศัพท์': 'Vocabulary Library',
    'ไปที่คลังศัพท์': 'Open Vocabulary Library',
    'เลือกการตรวจที่ต้องการเรียนรู้': 'Choose a medical test to learn',
    'เลือกหัวข้อเกี่ยวกับการรักษาที่ต้องการเรียนรู้': 'Choose a treatment topic to learn',
    'เลือกอวัยวะที่ต้องการเรียนรู้': 'Choose an organ to learn',
    'เลือกส่วนของร่างกายที่ต้องการเรียนรู้': 'Choose a body part to learn',
    'ข้อมูลสำหรับคนไข้': 'Patient information',
    'อาการปัจจุบัน': 'Current symptoms',
    'ประวัติสุขภาพ': 'Health history',
    'ข้อมูลเพิ่มเติม': 'Additional information',
    'วิธีการสื่อสารที่สะดวก': 'Preferred communication',
    'อุปกรณ์ช่วยการได้ยินที่ใช้อยู่': 'Hearing support currently used',
    'ไม่ใช้': 'None',
    'เครื่องช่วยฟัง': 'Hearing aid',
    'ประสาทหูเทียม': 'Cochlear implant',
    'สร้างใบสรุปประวัติ': 'Create Health Summary',
    'ใบสรุปประวัติของฉัน': 'My Health Summary',
    'ข้อมูลประวัติและความต้องการด้านการสื่อสารถูกรวมไว้ในใบเดียว': 'Your health information and communication needs are combined in one summary.',
    'ข้อมูลสำหรับการพบแพทย์': 'Information for the medical visit',
    'สร้างข้อมูลแล้ว': 'Created',
    'อุปกรณ์ช่วยฟัง': 'Hearing support',
    'ระยะเวลาที่มีอาการ': 'Symptom duration',
    'ประวัติแพ้ยา': 'Drug allergies',
    'โรคประจำตัว': 'Medical conditions',
    'ยาหรืออาหารเสริมที่ใช้': 'Medicines or supplements',
    'ประวัติการรักษาหรือผ่าตัด': 'Treatment or surgery history',
    'ข้อความสำหรับนำไปใช้': 'Text to use',
    'สามารถแก้ไขข้อความในช่องนี้ได้ก่อนคัดลอกหรือพิมพ์': 'You can edit this text before copying or printing.',
    'คัดลอกข้อความ': 'Copy Text',
    'แก้ไขข้อความ': 'Edit Text',
    'ล้างข้อมูล': 'Clear Information',
    'ข้อมูลพื้นฐาน': 'Basic Information',
    'ข้อมูลเบื้องต้นสำหรับประกอบการซักประวัติ': 'Basic information for the medical history',
    'เหตุผลที่มาพบแพทย์': 'Reason for visit',
    'วันนี้มาพบแพทย์เรื่องอะไร?': 'What brings you to the doctor today?',
    'มีอาการอะไรบ้าง?': 'What symptoms do you have?',
    'รายละเอียดอาการ': 'Symptom details',
    'เริ่มมีอาการเมื่อไหร่?': 'When did the symptoms start?',
    'แพ้ยาอะไรไหม?': 'Do you have any drug allergies?',
    'มีโรคประจำตัวไหม?': 'Do you have any medical conditions?',
    'กำลังใช้ยาหรืออาหารเสริมอะไรอยู่ไหม?': 'Are you taking any medicines or supplements?',
    'มีประวัติการรักษาหรือผ่าตัดที่สำคัญไหม?': 'Any important treatment or surgery history?',
    'มีอะไรที่อยากบอกเพิ่มเติมไหม?': 'Anything else you would like to tell us?',
    'สิ่งที่อยากให้แพทย์หรือเจ้าหน้าที่ทราบ': 'Anything you want the doctor or staff to know',
    'กรอกข้อมูลพื้นฐาน อาการ ประวัติสุขภาพ และวิธีการสื่อสารที่สะดวกสำหรับคุณ': 'Enter basic information, symptoms, health history, and your preferred communication method.',
    'เลือกอาการที่ตรงกับคุณและเพิ่มรายละเอียดได้': 'Choose the symptoms that apply and add details if needed.',
    'เลือกได้มากกว่าหนึ่งข้อ เพื่อให้บุคลากรทราบว่าควรสื่อสารกับคุณอย่างไร': 'Choose more than one option so staff know how to communicate with you.',
    'ส่วนนี้จะถูกรวมไว้ในใบสรุปเดียวกับประวัติ': 'This will be included in the same summary as your health history.',
    'ปวดศีรษะ': 'Headache', 'มีไข้': 'Fever', 'เจ็บคอ': 'Sore throat', 'เวียนศีรษะ': 'Dizziness',
    'อาการอื่น ๆ': 'Other symptoms', '(ถ้ามี)': '(if any)', 'วันนี้': 'Today', '1–3 วันที่แล้ว': '1–3 days ago', 'ประมาณ 1 สัปดาห์': 'About 1 week ago', 'มากกว่า 1 สัปดาห์': 'More than 1 week ago',
    'ชาย': 'Male', 'หญิง': 'Female', 'อื่น ๆ': 'Other', '(ไม่ระบุก็ได้)': '(optional)',
    'เจ็บหน้าอก': 'Chest pain', 'หายใจลำบาก': 'Difficulty breathing', 'คลื่นไส้': 'Nausea', 'อาเจียน': 'Vomiting',
    'กรุณาหันหน้าเข้าหาฉันเวลาพูด': 'Please face me when speaking',
    'ขอเขียนแทนการพูดได้ไหม': 'Could I write instead of speaking?',
    'ขอพิมพ์ข้อความเพื่อสื่อสารได้ไหม': 'Could I type a message to communicate?',
    'พูดซ้ำ': 'Repeat',
    'พูดให้ชัดเจน': 'Speak clearly',
  };



  /* Comprehensive UI phrase coverage for all pages */
  Object.assign(dict, {
    'สำหรับผู้ศึกษา': 'For Learners',
    'ผู้ศึกษา': 'Learner',
    'สำหรับผู้เรียนรู้': 'For Learners',
    'ผู้เรียนรู้': 'Learner',
    'MOR KHAO JAI · เครื่องมือเรียนรู้ด้านสุขภาพ': 'MOR KHAO JAI · Healthcare learning tools',
    'เริ่มต้นจากบทบาทของคุณ': 'Start with your role',
    'เลือกพื้นที่ที่เหมาะกับสิ่งที่คุณกำลังต้องการ': 'Choose the space that fits what you need.',
    'คลังภาษามือสุขภาพ': 'Health Sign Language Library',
    'เกมภาษามือ': 'Sign Language Game',
    '🎮 ฝึกผ่านเกม': '🎮 Practice with a Game',
    '🤟 คลังคำศัพท์สุขภาพ': '🤟 Health Vocabulary Library',
    'กรอกอาการและสิ่งที่ต้องการบอกแพทย์': 'Enter your symptoms and what you want the doctor to know.',
    'กรอกข้อมูลพื้นฐาน อาการ ประวัติสุขภาพ และวิธีการสื่อสารที่สะดวกสำหรับคุณ': 'Enter basic information, symptoms, health history, and your preferred way to communicate.',
    'กรุณากรอกข้อมูลให้ครบก่อนส่งรายงานครับ': 'Please complete all required information before submitting the report.',
    'กรุณาช่วยสื่อสารกับฉันโดย': 'Please communicate with me by',
    'กรุณาพูดซ้ำอีกครั้ง': 'Please repeat that.',
    'กรุณาพูดให้ชัดเจนหน่อย': 'Please speak clearly.',
    'กรุณาหันหน้าเข้าหาฉันเวลาพูด': 'Please face me when speaking.',
    'กรุณาหันหน้าเข้าหาฉัน': 'Please face me.',
    'การตรวจตัวอย่างปัสสาวะเพื่อหาข้อมูลเกี่ยวกับสุขภาพและการทำงานของร่างกาย': 'A urine test that provides information about health and body function.',
    'การตรวจตัวอย่างเลือดเพื่อดูข้อมูลเกี่ยวกับร่างกาย': 'A blood test used to check information about the body.',
    'การตรวจร่างกายโดยบุคลากรทางการแพทย์เพื่อประเมินอาการและสุขภาพเบื้องต้น': 'A physical examination by healthcare staff to assess symptoms and general health.',
    'การนัดหมายให้ผู้ป่วยกลับมาพบแพทย์เพื่อติดตามอาการ หรือประเมินผลหลังการรักษา': 'An appointment for a patient to return to the doctor for follow-up or to assess the results of treatment.',
    'การพูดด้วยความชัดเจนและความเร็วที่เหมาะสม เพื่อช่วยให้ผู้ฟังเข้าใจได้ง่ายขึ้น': 'Speaking clearly at an appropriate pace to make it easier for the listener to understand.',
    'การรักษาโดยใช้วิธีการผ่าตัดเพื่อแก้ไขหรือรักษาความผิดปกติของร่างกาย': 'Treatment that uses surgery to correct or treat a problem in the body.',
    'การวัดแรงดันของเลือดที่กระทำต่อผนังหลอดเลือด': 'Measuring the pressure of blood against the walls of blood vessels.',
    'การหันหน้าเข้าหาผู้ป่วยขณะสื่อสาร เพื่อให้ผู้ป่วยมองเห็นใบหน้าและช่วยรับข้อมูลได้ชัดเจนขึ้น': 'Facing the patient while communicating so they can see your face and receive information more clearly.',
    'การเข้าพักรักษาตัวในโรงพยาบาลตามคำแนะนำของบุคลากรทางการแพทย์': 'Staying in hospital as recommended by healthcare staff.',
    'การใช้ข้อความที่เขียนเพื่อช่วยสื่อสารข้อมูลหรืออาการระหว่างผู้ป่วยและบุคลากรทางการแพทย์': 'Using written messages to communicate information or symptoms between patients and healthcare staff.',
    'การใช้คลื่นเสียงความถี่สูงเพื่อสร้างภาพอวัยวะและเนื้อเยื่อภายในร่างกาย': 'Using high-frequency sound waves to create images of organs and tissues inside the body.',
    'การใช้ท่าทางและการเคลื่อนไหวของมือเพื่อสื่อความหมาย': 'Using gestures and hand movements to convey meaning.',
    'การใช้รังสีเอกซ์เพื่อสร้างภาพภายในร่างกาย': 'Using X-rays to create images inside the body.',
    'การให้ยาเข้าสู่ร่างกายโดยใช้เข็มและกระบอกฉีดยา': 'Giving medicine into the body using a needle and syringe.',
    'กำลังพาไปยังคลังรวมภาษามือและศัพท์สุขภาพ': 'Taking you to the Health Sign Language and vocabulary library.',
    'ขอบคุณที่บอกเราครับ': 'Thank you for telling us.',
    'ข้อ 1 / 5': 'Question 1 / 5',
    'ข้อมูลสำคัญถูกเขียนหรือพิมพ์ให้แล้ว': 'The important information has already been written or typed.',
    'ควรหันหน้าเข้าหาผู้ป่วย': 'Face the patient.',
    'ควรหันแสงไปที่ใบหน้าของคุณแทนการส่องไปที่ผู้ป่วยที่มีปัญหาทางการได้ยิน วิธีนี้จะช่วยให้พวกเขาสามารถอ่านสีหน้าและปากได้ง่ายขึ้น': 'Direct the light toward your face rather than shining it at a patient with hearing difficulties. This makes it easier for them to see your facial expressions and lips.',
    'คำศัพท์ / วิดีโอ / เนื้อหา': 'Vocabulary / Video / Content',
    'คำศัพท์ที่ใช้ในการสื่อสารเกี่ยวกับโรงพยาบาล': 'Vocabulary used for communication in hospitals.',
    'คำศัพท์นี้ใช้สำหรับการเรียนรู้และการสื่อสาร ไม่ใช่การวินิจฉัยหรือประเมินอาการทางการแพทย์': 'This vocabulary is for learning and communication. It is not for diagnosing or assessing medical symptoms.',
    'คำศัพท์เกี่ยวกับโรคและภาวะสุขภาพที่พบบ่อย': 'Vocabulary about common diseases and health conditions.',
    'คำศัพท์และประโยคที่ใช้เมื่อติดตามอาการหลังการรักษา': 'Vocabulary and phrases used when following up on symptoms after treatment.',
    'คู่มือสื่อสารกับผู้ป่วยที่มีปัญหาการได้ยิน': 'Communication guide for patients with hearing difficulties',
    'คู่มือสื่อสารสำหรับบุคลากร · หมอเข้าใจ': 'Communication Guide for Healthcare Staff · MOR KHAO JAI',
    'ค้นหาและเรียนรู้คำศัพท์เกี่ยวกับร่างกาย อาการ และคำศัพท์สุขภาพ': 'Search and learn vocabulary about the body, symptoms, and health.',
    'จับมือให้ถูก': 'Match the sign correctly',
    'ฉันสะดวกสื่อสารแบบไหน?': 'Which way of communicating works best for me?',
    'ฉันเข้าใจแล้ว': 'I understand.',
    'ฉันใช้ภาษามือในการสื่อสาร': 'I use sign language to communicate.',
    'ช่วยให้ฟังและทำความเข้าใจได้ง่ายขึ้น': 'Helps make listening and understanding easier.',
    'ช่วยให้มองหน้าและอ่านปากได้': 'Helps the patient see your face and read your lips.',
    'ช่วยให้มองหน้าและอ่านปากได้สะดวกขึ้น': 'Makes it easier to see your face and read your lips.',
    'ช่วยให้เรารู้ว่าควรให้ความสำคัญกับเรื่องนี้ประมาณไหน': 'Helps us understand how important this issue is.',
    'ดูวิดีโอภาษามือ แล้วเลือกความหมายที่คิดว่าถูกที่สุด': 'Watch the sign language video and choose the meaning you think is correct.',
    'ดูวิดีโอแล้วลองฝึกใช้คำนี้ในการสื่อสารด้านสุขภาพ': 'Watch the video and practice using this word in healthcare communication.',
    'ตรวจสอบว่าห้องมีแสงสว่างเพียงพอ เพื่อให้ผู้ป่วยสามารถมองเห็นหน้าของคุณได้อย่างชัดเจน': 'Make sure the room is well lit so the patient can clearly see your face.',
    'ตัวอย่างประโยคสั้น ๆ สำหรับใช้จริงในโรงพยาบาล': 'Examples of short phrases for real use in hospitals.',
    'ติดป้ายเพื่อให้ผู้ป่วยแจ้งให้ทราบหากพวกเขามีปัญหาทางการได้ยินที่จุดรอคิว และไม่ใช่ผู้ป่วยทุกคนจะใช้เครื่องช่วยฟัง': 'Use a sign at the waiting area so patients can indicate if they have hearing difficulties. Not every patient uses a hearing aid.',
    'ต้นแบบเพื่อการเรียนรู้และพัฒนาต่อ': 'A prototype for learning and further development.',
    'ต้องการรายงานเรื่องอะไร?': 'What would you like to report?',
    'ถอดหน้ากากหรืออุปกรณ์ป้องกันใบหน้าออกทั้งหมด หากไม่มีปัญหา': 'Remove masks or face protection only when it is safe and appropriate to do so.',
    'ทดลองอ่านใบสรุปอาการ': 'Practice Reading a Symptom Summary',
    'ทดลองอ่านใบสรุปอาการ · หมอเข้าใจ': 'Practice Reading a Symptom Summary · MOR KHAO JAI',
    'ทบทวนคำศัพท์และลองฝึกจำในรูปแบบกิจกรรม': 'Review vocabulary and practice remembering it through activities.',
    'ทบทวนคำศัพท์และสถานการณ์การสื่อสารแบบสนุก ๆ': 'Review vocabulary and communication situations in a fun way.',
    'ท่าทางในวิดีโอนี้หมายถึงอะไร?': 'What does the sign in this video mean?',
    'บริเวณจุดรอคิว นอกจากจะเรียกชื่อผู้ป่วยเมื่อถึงคิวแล้ว ควรใช้ระบบหมายเลขหรือป้ายด้วย': 'At the waiting area, use a number or sign system as well as calling patients by name when their turn comes.',
    'บริเวณจุดรอคิวในโรงพยาบาลอาจมีเสียงดังมาก ผู้ป่วยที่มีปัญหาการได้ยินอาจไม่ได้ยินคำแนะนำหรือชื่อที่เจ้าหน้าที่เรียก': 'Hospital waiting areas can be noisy. Patients with hearing difficulties may not hear instructions or their name being called.',
    'บอกสิ่งที่ต้องการให้แพทย์ช่วยดูหรือประเมิน': 'Tell the doctor what you would like them to look at or assess.',
    'บอกเราได้เลยครับ ข้อมูลของคุณจะช่วยให้หมอเข้าใจพัฒนาต่อได้': 'Tell us what you think. Your information will help us improve MOR KHAO JAI.',
    'บัตรสรุป “ฉันสื่อสารแบบไหนได้สะดวก” เพื่อให้เจ้าหน้าที่เห็นความต้องการตั้งแต่ต้น': 'A summary card showing “How I communicate best” so staff can understand the patient’s needs from the start.',
    'บันทึกรายละเอียดเกี่ยวกับการสื่อสารที่จำเป็น ลงในแฟ้มประวัติผู้ป่วย': 'Record necessary communication details in the patient record.',
    'ปัญหาหลักในการสื่อสารสำหรับผู้ที่มีปัญหาทางการได้ยินคือการขาดความเอาใจใส่ ผู้ป่วยเหล่านี้อาจต้องเผชิญกับความเจ็บป่วยที่ยืดเยื้อหรือไม่จำเป็นเนื่องจากการสื่อสารที่ไม่เข้าใจมากพอกับบุคลากรทางการแพทย์ แต่หากมีการเตรียมความพร้อมในการสื่อสารที่ดี ก็จะทำให้ผู้ป่วยได้รับการรักษาที่เหมาะสมและมีประสิทธิภาพ': 'A major communication challenge for people with hearing difficulties is not receiving communication support that matches their needs. Poor communication can make healthcare experiences more difficult, while good preparation can help patients receive appropriate and effective care.',
    'ปุ่ม “ส่งข้อมูลไปยังโรงพยาบาล” ยังไม่เปิดใช้งาน เนื่องจากต้องมีการเชื่อมต่อกับระบบของโรงพยาบาล และกำหนดเรื่องการอนุญาตและความปลอดภัยของข้อมูลก่อน': 'The “Send Information to Hospital” button is not active yet because it would require integration with a hospital system and appropriate permission and data-safety measures.',
    'ผู้ป่วยที่มีปัญหาทางการได้ยิน ไม่ว่าจะใช้เครื่องช่วยฟังหรือไม่ อาจสื่อสารกับบุคลากรทางการแพทย์ได้หลายวิธี บางคนพูดและอ่านปาก บางคนใช้ภาษามือหรือสื่อสารโดยการเขียนลงกระดาษ พิมพ์ลงบนเครื่องมือสื่อสาร และบางคนพาคนมาด้วยเพื่อเป็นคนช่วยพูดคุย': 'People with hearing difficulties may communicate with healthcare staff in many ways, whether or not they use hearing aids. Some speak and lip-read; others use sign language, writing, or typing, and some bring a companion to help communicate.',
    'ผู้ป่วยรู้ว่าจะติดต่อใครหากไม่เข้าใจ': 'The patient knows who to contact if they do not understand.',
    'ผู้ป่วยรู้ว่าต้องทำอะไรต่อ': 'The patient knows what to do next.',
    'ฝึกคำศัพท์สุขภาพด้วยการดูรูปปากแล้วพูดตาม': 'Practice health vocabulary by watching the mouth and repeating.',
    'ฝึกคำศัพท์สุขภาพทีละคำ โดยดูรูปแบบปาก แล้วลองออกเสียงตามจังหวะของตัวเอง': 'Practice health vocabulary one word at a time by watching the mouth and speaking at your own pace.',
    'ฝึกจับประเด็นสำคัญจากข้อมูลผู้ป่วยก่อนเริ่มซักถาม': 'Practice identifying key points from patient information before asking questions.',
    'พบปัญหา มีข้อเสนอแนะ หรืออยากให้เราเพิ่มอะไร': 'Have a problem, suggestion, or something you would like us to add?',
    'พื้นที่สำหรับวิดีโอภาษามือ': 'Space for the sign language video',
    'พูดชัดเจนและไม่เร็วเกินไป': 'Speak clearly and not too quickly.',
    'พูดด้วยระดับเสียงปกติ ไม่เร็วหรือช้าเกินไป': 'Speak at a normal volume and pace.',
    'ภายในห้องให้ตรวจ': 'Inside the examination room',
    'ภาวะที่ร่างกายตอบสนองต่อสารบางอย่างมากกว่าปกติ': 'A condition in which the body reacts more strongly than usual to a substance.',
    'ภาวะที่เชื้อโรคเข้าสู่ร่างกายและทำให้เกิดการตอบสนองของร่างกาย': 'A condition in which germs enter the body and cause a body response.',
    'มองรูปปาก → อ่านคำ → ลองพูดตามช้า ๆ → พักเมื่อเหนื่อย ไม่จำเป็นต้องออกเสียงเหมือนกันทุกคน': 'Watch the mouth → read the word → repeat slowly → rest when tired. You do not need to pronounce it exactly like everyone else.',
    'มีผลต่อการใช้งาน': 'Affects usability',
    'มีอะไรอยากบอกเราไหม?': 'Is there anything else you would like to tell us?',
    'ยังมีอาการอยู่': 'Still have symptoms',
    'ยังไม่มีใครขึ้นกระดาน': 'No one is on the leaderboard yet.',
    'ยินดีต้อนรับสู่ “หมอเข้าใจ”': 'Welcome to “MOR KHAO JAI”',
    'รวมคำศัพท์ที่เกี่ยวข้องกับอาการ ร่างกาย การตรวจ การรักษา และการสื่อสารในโรงพยาบาล': 'Vocabulary related to symptoms, the body, tests, treatment, and communication in hospitals.',
    'รวมภาษามือและคำศัพท์สุขภาพสำหรับทุกกลุ่ม': 'Health sign language and vocabulary for everyone.',
    'รายงานของคุณถูกส่งให้ทีมหมอเข้าใจแล้ว': 'Your report has been sent to the MOR KHAO JAI team.',
    'ลดสิ่งรบกวนให้น้อยที่สุด หากผู้ป่วยของคุณเป็นเด็ก สิ่งนี้สำคัญมาก': 'Reduce distractions as much as possible. This is especially important when the patient is a child.',
    'ลดเสียงรบกวนรอบข้าง': 'Reduce background noise.',
    'ลองอ่านข้อมูลผู้ป่วยเบื้องต้น แล้วตัดสินใจว่าควรจัดลำดับการดูแลและสื่อสารอย่างไร': 'Read the patient information and decide how to prioritize care and communication.',
    'ล้างข้อมูล': 'Clear information',
    'วันนี้มาพบแพทย์เรื่องอะไร?': 'What brings you to the doctor today?',
    'วิดีโอภาษามือควรผ่านการตรวจสอบจากผู้ใช้ภาษามือจริงก่อนนำไปใช้งาน': 'Sign language videos should be reviewed by actual sign language users before being used.',
    'วิธีสื่อสารที่สำคัญ': 'Important communication methods',
    'วิธีใช้งานหรือการสื่อสาร': 'How to use it or communicate',
    'สะสม Streak': 'Build your streak',
    'สามารถนั่งใกล้พวกเขามากกว่าการนั่งกับผู้ป่วยคนอื่นได้': 'You may sit closer to them if appropriate, rather than sitting with other patients.',
    'สามารถใส่วิดีโอภาษามือของคำนี้ได้ที่นี่': 'A sign language video for this word can be added here.',
    'สารหรือผลิตภัณฑ์ที่ใช้เพื่อป้องกัน บรรเทา หรือรักษาโรคและอาการต่าง ๆ': 'A substance or product used to prevent, relieve, or treat diseases and symptoms.',
    'สื่อสารให้เข้าใจกันง่ายขึ้น': 'Communicate in a way that is easier to understand.',
    'ส่งข้อมูลไปยังโรงพยาบาล': 'Send Information to Hospital',
    'ส่งความคิดเห็นอีกครั้ง': 'Submit feedback again',
    'ส่งรายงานให้หมอเข้าใจ': 'Submit the report to MOR KHAO JAI',
    'หันหน้าเข้าหากัน': 'Face each other',
    'หันหน้าเข้าหาผู้ป่วย': 'Face the patient',
    'หากกำลังกรอกใบซักประวัติอยู่ สามารถเลือกส่วนการสื่อสารในใบเดียวกันได้เลย': 'If you are filling out the medical history form, you can choose the communication section in the same form.',
    'หากคุณทราบว่าผู้ป่วยมีปัญหาทางการได้ยิน ควรตรวจสอบให้แน่ใจว่าการพูดคุยอยู่ในสถานที่ที่เหมาะสม': 'If you know that a patient has hearing difficulties, make sure the conversation takes place in a suitable setting.',
    'หากผู้ป่วยที่มีปัญหาทางการได้ยินนัดล่วงหน้าเพื่อทำการนัดหมาย (หรือหากมีบุคคลอื่นโทรมาแทน) ให้สอบถามว่าผู้ป่วยต้องการสื่อสารด้วยวิธีใด': 'If a patient with hearing difficulties makes an appointment in advance, or someone calls on their behalf, ask which communication method the patient prefers.',
    'หากไม่แน่ใจว่าเข้าใจสิ่งที่ผู้ป่วยพูด ให้ถามคำถามเพิ่มเติม': 'If you are not sure you understood the patient, ask additional questions.',
    'อธิบายสิ่งที่พบหรือสิ่งที่อยากให้เราปรับปรุงได้ตามสบาย': 'Feel free to describe what you noticed or what you would like us to improve.',
    'อยากลองดูก่อน?': 'Want to explore first?',
    'อยากเสนอไว้': 'Something you would like to suggest',
    'อยากให้ดู': 'Something you would like us to see',
    'อยากให้เพิ่มหรือปรับอะไร': 'What would you like us to add or change?',
    'อยากให้เรารู้ว่าใครส่งไหม?': 'Would you like us to know who sent it?',
    'อาการดีขึ้นแล้ว': 'Symptoms are better now.',
    'อาการถ่ายอุจจาระเหลวหรือถ่ายบ่อยกว่าปกติ': 'Loose or more frequent bowel movements than usual.',
    'อาการที่มีการขย้อนหรือสำรอกสิ่งที่อยู่ในกระเพาะอาหารออกมา': 'A symptom involving bringing stomach contents back up.',
    'อาการหรือภาวะที่เกิดจากการบาดเจ็บของร่างกาย': 'A symptom or condition caused by an injury to the body.',
    'อ่านอาการสำคัญแล้วเลือกแนวทางที่เหมาะที่สุด ไม่ใช่การวินิจฉัยโรค': 'Read the key symptoms and choose the most appropriate approach. This is not a diagnosis.',
    'เขียนข้อมูลสำคัญลงบนป้ายที่มองเห็นได้ชัดเจน': 'Write important information on a clearly visible sign.',
    'เข้าไปดูเนื้อหาบางส่วนได้ทันที': 'Explore some content right away.',
    'เครื่องมือช่วยเรียนรู้คำศัพท์และเตรียมตัว สำหรับสถานการณ์ด้านสุขภาพ เพื่อให้ผู้ป่วยและบุคลากรทางการแพทย์เข้าใจกันได้มากขึ้น': 'A tool for learning vocabulary and preparing for healthcare situations so patients and healthcare staff can understand each other better.',
    'เครื่องมือนี้ใช้บอกความต้องการ ไม่ใช่เอกสารรับรองความพิการ →': 'This tool communicates needs. It is not proof of disability →',
    'เครื่องมือเตรียมตัวก่อนพบแพทย์และช่วยสื่อสารความต้องการของคุณ': 'A tool to prepare for a medical visit and communicate your needs.',
    'เช็กวิธีสื่อสารที่ทำได้ทันทีในไม่กี่นาที': 'Check communication methods you can use right away in a few minutes.',
    'เตรียมอาการ เรียนรู้วิธีสื่อสาร และค้นหาคำศัพท์สุขภาพที่ต้องการ': 'Prepare your symptoms, learn communication methods, and find the health vocabulary you need.',
    'เพราะสุขภาพที่ดี เริ่มจากความเข้าใจ': 'Good health starts with understanding.',
    'เมื่อผู้ป่วยผู้ใหญ่มีผู้ติดตาม ควรสอบถามพวกเขาก่อนเสมอว่าต้องการอยู่ตามลำพังกับบุคลากรทางการแพทย์ในห้องตรวจหรือไม่ อย่ารอจนกว่าคำถามจะทำให้ผู้ป่วยรู้สึกอึดอัด': 'When an adult patient has a companion, always ask whether they would like to speak privately with healthcare staff in the examination room. Do not wait until a question makes the patient uncomfortable.',
    'เมื่อใส่วิดีโอแล้ว กด ▶ เพื่อดูท่าทาง': 'Once a video is added, press ▶ to view the sign.',
    'เราจะนำความคิดเห็นไปใช้ประกอบการปรับปรุงต้นแบบต่อไป': 'We will use your feedback to improve the prototype.',
    'เริ่มต้นจากบทบาทของคุณ': 'Start with your role',
    'เรียนรู้คำศัพท์และแนวทาง เพื่อสื่อสารกับผู้ป่วยได้ชัดเจนขึ้น': 'Learn vocabulary and approaches for clearer communication with patients.',
    'เรียนรู้ผ่านเกม 5 ข้อ': 'Learn through a 5-question game',
    'เรียนรู้ภาษามือสุขภาพ และฝึกผ่านกิจกรรมต่าง ๆ': 'Learn health-related sign language and practice through activities.',
    'เรียนรู้ภาษามือสุขภาพจากคำศัพท์ที่สนใจ แล้วทบทวนความเข้าใจผ่านเกม': 'Learn health-related sign language from vocabulary that interests you, then review your understanding through a game.',
    'เรียนรู้ภาษามือสุขภาพเพื่อช่วยสื่อสารกับผู้ป่วยได้ชัดเจนยิ่งขึ้น': 'Learn health-related sign language to communicate more clearly with patients.',
    'เรียนรู้วิธีปรับการสื่อสารแบบง่าย ๆ เช่น หันหน้า พูดชัด เขียน หรือพิมพ์': 'Learn simple ways to adapt communication, such as facing the patient, speaking clearly, writing, or typing.',
    'เรื่องนี้สำคัญแค่ไหน?': 'How important is this?',
    'เรื่องอื่นที่อยากบอกเรา': 'Anything else you would like to tell us',
    'เลือกพื้นที่ที่เหมาะกับสิ่งที่คุณกำลังต้องการ': 'Choose the space that fits what you need.',
    'เลือกวิธีการสื่อสารที่สะดวก เพื่อให้บุคลากรเข้าใจความต้องการของคุณได้ง่ายขึ้น': 'Choose the communication methods that work for you so staff can understand your needs more easily.',
    'เลือกวิธีที่ต้องการให้บุคลากรใช้ในการสื่อสาร': 'Choose how you would like staff to communicate with you.',
    'เลือกวิธีที่เหมาะกับคนตรงหน้า ไม่จำเป็นต้องใช้วิธีเดียวกันทุกคน': 'Choose the method that suits the person in front of you. The same method does not have to work for everyone.',
    'เลือกหัวข้อที่ใกล้เคียงกับสิ่งที่คุณต้องการบอกเราที่สุด': 'Choose the topic closest to what you want to tell us.',
    'เล่นเกมรอบแรกของคุณ': 'Play your first game',
    'เล่าให้เราฟังหน่อย': 'Tell us about it.',
    'เหมาะสำหรับผู้ที่ต้องการฝึกพูดหรือออกเสียง และแต่ละคนอาจมีความต้องการแตกต่างกัน': 'Suitable for people who want to practice speaking or pronunciation. Everyone may have different needs.',
    'เหมาะสำหรับผู้ป่วยและบุคลากร →': 'Suitable for patients and healthcare staff →',
    'แบบฟอร์มนี้เป็นต้นแบบสำหรับช่วยเตรียมข้อมูล ก่อนพบแพทย์ ไม่ใช่เวชระเบียนและไม่ใช้เพื่อวินิจฉัยโรค': 'This form is a prototype for preparing information before a medical visit. It is not a medical record and is not used to diagnose disease.',
    'แล้วมาเป็นคนเปิดตารางเลย!': 'Come be the one at the top of the leaderboard!',
    'แล้วไปต่อ!': 'Keep going!',
    'แสดงออกทางสีหน้าเท่าที่จะทำได้ เช่น ทำหน้ามีความสุขหากคุณกำลังบอกข่าวดี': 'Use facial expressions when appropriate, such as looking happy when sharing good news.',
    'ใครจะเป็นเซียนภาษามืออันดับหนึ่ง?': 'Who will be the top sign language player?',
    'ใช้การเขียนเพื่อช่วยในการสื่อสาร': 'Use writing to support communication.',
    'ใช้จังหวะปกติ ไม่ตะโกน': 'Use a normal pace. Do not shout.',
    'ใช้บอกว่าผู้พูดต้องการวิธีการสื่อสารที่ชัดเจนและเหมาะสมกับตนเอง': 'Used to indicate that the speaker needs clear communication that suits them.',
    'ใช้บอกว่าผู้รับสารสามารถเข้าใจข้อมูลหรือสิ่งที่อีกฝ่ายสื่อสารได้': 'Used to indicate that the listener can understand the information being communicated.',
    'ใช้บอกว่าอาการที่เคยมีอยู่ยังคงเกิดขึ้นหรือยังไม่หายไป': 'Used to say that a previous symptom is still present or has not gone away.',
    'ใช้บอกว่าอาการหรือความรู้สึกผิดปกติที่เคยมีนั้นดีขึ้น': 'Used to say that a previous symptom or unusual feeling has improved.',
    'ใช้บอกว่าอาการหรือความรู้สึกผิดปกติที่เคยมีนั้นรุนแรงขึ้นหรือแย่ลง': 'Used to say that a previous symptom or unusual feeling has become more severe or worse.',
    'ใช้ประโยคสั้นๆ ง่ายๆ': 'Use short, simple sentences.',
    'ใช้ภาษามือในการสื่อสาร': 'Use sign language to communicate.',
    'ใช้มือถือช่วยเมื่อสะดวก': 'Use a phone when convenient.',
    'ใช้รูปภาพ การเขียนเพื่อช่วยให้ผู้ป่วยเข้าใจได้ง่ายขึ้น': 'Use pictures and writing to help the patient understand more easily.',
    'ใช้เปิดดูคำศัพท์ที่ต้องสื่อสารกับผู้ป่วยบ่อย ๆ': 'Use it to look up vocabulary that is often needed when communicating with patients.',
    'ใช้เป็น checklist สั้น ๆ ก่อนปล่อยผู้ป่วยกลับ': 'Use it as a short checklist before the patient leaves.',
    'ใช้เมื่อการพูดไม่ชัดเจนพอ': 'Use when speech is not clear enough.',
    'ใช้เมื่อผู้ฟังต้องการให้อีกฝ่ายพูดหรือสื่อสารข้อมูลเดิมอีกครั้ง': 'Use when the listener needs the other person to repeat the same information.',
    'ใช้โทรศัพท์หรืออุปกรณ์ช่วยพิมพ์': 'Use a phone or typing device.',
    'ใช้โทรศัพท์หรืออุปกรณ์ช่วยพิมพ์เพื่อสื่อสารข้อมูลสำคัญ': 'Use a phone or typing device to communicate important information.',
    'ให้ความเป็นส่วนตัวแก่ผู้ป่วย: พวกเขาสามารถขอให้คุณเพิ่มระดับเสียงได้โดยไม่ต้องกลัวว่าคนอื่นจะได้ยินประวัติการรักษาของพวกเขา': 'Protect the patient’s privacy. They can ask you to speak louder without worrying that others will hear their medical history.',
    'ไปที่เกมภาษามือ': 'Go to the Sign Language Game',
    'ไม่จำเป็นต้องใส่ชื่อก็ได้ครับ': 'You do not have to provide your name.',
    'ไม่จำเป็นต้องใส่ชื่อหรือข้อมูลส่วนตัว หากไม่สะดวกค่ะ เราต้องการความคิดเห็นของคุณ เพื่อนำไปใช้ปรับปรุงต้นแบบหมอเข้าใจ': 'You do not need to provide your name or personal information if you are not comfortable. We want your feedback to improve the MOR KHAO JAI prototype.',
    'ไม่พบคำศัพท์ที่ค้นหา': 'No matching vocabulary found.',
    '“พยาบาลจะฉีดยา”': '“The nurse will give an injection.”',
    '“พยาบาลจะวัดความดัน”': '“The nurse will check your blood pressure.”',
    '“หมอจะตรวจร่างกาย”': '“The doctor will perform a physical examination.”',
    '“หมอแนะนำให้ผ่าตัด”': '“The doctor recommends surgery.”',
    '“หมอให้ยา”': '“The doctor prescribed medicine.”',
    '“หมอให้แอดมิตนอนโรงพยาบาล”': '“The doctor asked me to stay in the hospital.”',
    '“หมอให้ไปตรวจปัสสาวะ”': '“The doctor asked me to have a urine test.”',
    '“หมอให้ไปตรวจเลือด”': '“The doctor asked me to have a blood test.”',
    '“หมอให้ไปเอกซเรย์”': '“The doctor asked me to have an X-ray.”',
    '← กลับหน้าผู้ป่วย': '← Back to Patient',
    '← กลับไปใบซักประวัติ': '← Back to Medical History Form',
    '↻ ดูซ้ำได้': '↻ Watch again',
    '② พูดชัด': '② Speak clearly',
    '✍️ เมื่อฟังไม่ชัด ใช้การเขียน': '✍️ When hearing is difficult, use writing',
    '✓ เช็กก่อนจบการพูดคุย': '✓ Check before ending the conversation',
    '🎮 เล่นเกม': '🎮 Play Game',
    '🎮 เล่นเกมอีกครั้ง': '🎮 Play Again',
    '🏆 อันดับวันนี้': '🏆 Today’s Ranking',
    '💬 คู่มือสื่อสารแบบหน้างาน': '💬 Practical Communication Guide',
    '💳 สร้างบัตรช่วยสื่อสารของฉัน': '💳 Create My Communication Card',
    '📱 เมื่อสะดวกใช้การพิมพ์': '📱 Use typing when convenient',
    '🖨️ ปริ้นบัตร': '🖨️ Print Card',
    '🖨️ ปริ้นใบสรุป': '🖨️ Print Summary',
    '🗣️ เลือกวิธีสื่อสารที่เหมาะกับฉัน': '🗣️ Choose the communication method that works for me',
    '🩺 ทดลองอ่านใบสรุปอาการ': '🩺 Practice Reading a Symptom Summary',
    '🩺 เลือกเคสลองวิเคราะห์': '🩺 Choose a Case to Analyze',
    'จับมือให้ถูก': 'Match the sign correctly',
    '0 คำ': '0 words',
    '12–17 ปี': '12–17 years',
    '18–24 ปี': '18–24 years',
    '25–39 ปี': '25–39 years',
    '40–59 ปี': '40–59 years',
    '60 ปีขึ้นไป': '60 years and above',
    'ต่ำกว่า 12 ปี': 'Under 12 years',
    '1–3 วันที่แล้ว': '1–3 days ago',
    '(ถ้ามี)': '(if any)',
    '(ไม่บังคับ)': '(optional)',
    '(ไม่ระบุก็ได้)': '(optional)',
    'Hidden iframe ใช้รับผลจาก Google Apps Script โดยไม่ต้องเปิดหน้าใหม่': 'Hidden iframe used to receive results from Google Apps Script without opening a new page.',
    'Streak สูงสุด': 'Longest Streak',
    'กดไม่ได้ / หน้าเว็บมีปัญหา': 'Cannot click / the webpage has a problem',
    'กระดานจัดอันดับ · หมอเข้าใจ': 'Leaderboard · MOR KHAO JAI',
    'คำถาม': 'Question',
    'ข้อเสนอแนะ': 'Feedback',
    'รายละเอียด': 'Details',
    'คำศัพท์': 'Vocabulary',
    'ปิด': 'Close',
    'ทั้งหมด': 'All',
    'ความคืบหน้า': 'Progress',
    'คะแนนสูงสุด': 'High Score',
    'สะสม Streak': 'Build Your Streak',
    'เก็บคะแนน': 'Keep Score',
    'แล้วไปต่อ!': 'Keep going!',
    'ยังไม่มีใครขึ้นกระดาน': 'No one is on the leaderboard yet.',
    'ใครจะเป็นเซียนภาษามืออันดับหนึ่ง?': 'Who will be the top sign language player?'
  });


  Object.assign(dict, {
    'นัดหมาย':'Appointment','พิมพ์ข้อความ':'Type a message','ห้องฉุกเฉิน':'Emergency Room','ห้องตรวจ':'Examination Room','ห้องผ่าตัด':'Operating Room','ห้องยา':'Pharmacy','เขียนข้อความ':'Write a message',
    'ข้อมูลสำคัญที่แพทย์ควรทราบ':'Important information for the doctor','ข้อแนะนำ':'Recommendations','ดูตัวอย่าง →':'View an example →','ตัวอย่างบัตรช่วยสื่อสาร':'Communication Card Example','ต้องการการสื่อสารที่ชัดเจน':'Need clear communication','ปัญหาการใช้งาน':'Usability problem','ผู้เล่น':'Player','รายงานปัญหา':'Report a Problem','รายงานปัญหา · หมอเข้าใจ':'Report a Problem · MOR KHAO JAI','สำหรับบุคลากร':'For Healthcare Staff','สำหรับบุคลากร · หมอเข้าใจ':'For Healthcare Staff · MOR KHAO JAI','เนื้อหาภาษามือ':'Sign Language Content','เพศ':'Gender','เริ่มเกม →':'Start Game →','โรคหอบหืด':'Asthma','ใบซักประวัติก่อนพบแพทย์':'Pre-visit Medical History Form','ใบซักประวัติก่อนพบแพทย์ · หมอเข้าใจ':'Pre-visit Medical History Form · MOR KHAO JAI','① หันหน้า':'① Face the patient','🌱 ทั่วไป':'🌱 General','💡 วิธีฝึก':'💡 Practice Tips','💡 สำคัญ':'💡 Important','💡 เลือกได้มากกว่าหนึ่งข้อ':'💡 You can select more than one option','🔔 เร่งด่วน':'🔔 Urgent',
    'หมอเข้าใจ - ต้องการการสื่อสารที่ชัดเจน':'MOR KHAO JAI - Need Clear Communication','หมอเข้าใจ - นัดหมาย':'MOR KHAO JAI - Appointment','หมอเข้าใจ - ห้องฉุกเฉิน':'MOR KHAO JAI - Emergency Room','หมอเข้าใจ - ห้องตรวจ':'MOR KHAO JAI - Examination Room','หมอเข้าใจ - ห้องผ่าตัด':'MOR KHAO JAI - Operating Room','หมอเข้าใจ - ห้องยา':'MOR KHAO JAI - Pharmacy',
    'ลองฝึกใช้คำว่า “คลื่นไส้” ในการสื่อสารเกี่ยวกับอาการ':'Practice using “nausea” when communicating about symptoms.',
    'ลองฝึกใช้คำว่า “ความดันโลหิตสูง” ในการสื่อสารกับบุคลากรทางการแพทย์':'Practice using “hypertension” when communicating with healthcare staff.',
    'ลองฝึกใช้คำว่า “นัดหมาย” เพื่อสื่อสารเกี่ยวกับการนัดพบแพทย์หรือบุคลากรทางการแพทย์':'Practice using “appointment” when talking about a visit with a doctor or healthcare staff.',
    'ลองฝึกใช้คำว่า “บวม” เพื่อบอกอาการหรือบริเวณที่มีอาการกับบุคลากรทางการแพทย์':'Practice using “swelling” to describe a symptom or affected area to healthcare staff.',
    'ลองฝึกใช้คำว่า “ปวดท้อง” เพื่อบอกอาการกับบุคลากรทางการแพทย์':'Practice using “stomachache” to describe a symptom to healthcare staff.',
    'ลองฝึกใช้คำว่า “ปวด” ในการสื่อสารกับบุคลากรทางการแพทย์':'Practice using “pain” when communicating with healthcare staff.',
    'ลองฝึกใช้คำว่า “พยาบาล” เพื่อสื่อสารหรือเรียกบุคลากรทางการแพทย์':'Practice using “nurse” when communicating with or addressing healthcare staff.',
    'ลองฝึกใช้คำว่า “หอบหืด” ในการสื่อสารกับบุคลากรทางการแพทย์':'Practice using “asthma” when communicating with healthcare staff.',
    'ลองฝึกใช้คำว่า “หายใจลำบาก” เพื่อบอกอาการกับบุคลากรทางการแพทย์':'Practice using “difficulty breathing” to describe a symptom to healthcare staff.',
    'ลองฝึกใช้คำว่า “หายใจไม่ออก” ในการสื่อสารเกี่ยวกับอาการ':'Practice using “shortness of breath” when communicating about symptoms.',
    'ลองฝึกใช้คำว่า “ห้องฉุกเฉิน” เพื่อสื่อสารเกี่ยวกับสถานที่สำหรับผู้ที่ต้องได้รับการดูแลเร่งด่วน':'Practice using “emergency room” when talking about a place for people who need urgent care.',
    'ลองฝึกใช้คำว่า “ห้องตรวจ” เพื่อสื่อสารเกี่ยวกับสถานที่ตรวจผู้ป่วย':'Practice using “examination room” when talking about where patients are examined.',
    'ลองฝึกใช้คำว่า “ห้องผ่าตัด” เพื่อสื่อสารเกี่ยวกับสถานที่สำหรับการผ่าตัด':'Practice using “operating room” when talking about where surgery is performed.',
    'ลองฝึกใช้คำว่า “ห้องยา” เพื่อสื่อสารเกี่ยวกับสถานที่รับยาในโรงพยาบาล':'Practice using “pharmacy” when talking about where to receive medicine in a hospital.',
    'ลองฝึกใช้คำว่า “เจ็บหน้าอก” เพื่อบอกอาการกับบุคลากรทางการแพทย์':'Practice using “chest pain” to describe a symptom to healthcare staff.',
    'ลองฝึกใช้คำว่า “เลือดออก” เพื่อบอกอาการกับบุคลากรทางการแพทย์':'Practice using “bleeding” to describe a symptom to healthcare staff.',
    'ลองฝึกใช้คำว่า “เวียนหัว” ในการสื่อสารกับบุคลากรทางการแพทย์':'Practice using “dizziness” when communicating with healthcare staff.',
    'ลองฝึกใช้คำว่า “แผล” เพื่อบอกอาการหรือบริเวณที่มีแผลกับบุคลากรทางการแพทย์':'Practice using “wound” to describe a symptom or affected area to healthcare staff.',
    'ลองฝึกใช้คำว่า “โรงพยาบาล” เพื่อสื่อสารเกี่ยวกับสถานพยาบาล':'Practice using “hospital” when talking about a healthcare facility.',
    'ลองฝึกใช้คำว่า “ไข้” ในการสื่อสารเกี่ยวกับอาการ':'Practice using “fever” when communicating about symptoms.',
    'ลองฝึกใช้คำว่า “ไอ” ในการสื่อสารเกี่ยวกับอาการ':'Practice using “cough” when communicating about symptoms.'
  });


  Object.assign(dict, {
    'ฉันต้องการการสื่อสารที่ชัดเจน':'I need clear communication',
    'เช่น มิน':'e.g. Min','เช่น 18':'e.g. 18','เช่น ปวดหัวมา 3 วัน อยากให้แพทย์ช่วยตรวจ':'e.g. Headache for 3 days; I would like the doctor to examine me.','เช่น ปวดตรงไหน ปวดแบบไหน อะไรทำให้อาการดีขึ้นหรือแย่ลง':'e.g. Where does it hurt? What does it feel like? What makes it better or worse?','เช่น ไม่เคยแพ้ยา / แพ้ยาชื่อ...':'e.g. No known drug allergies / Allergic to...','เช่น เบาหวาน / ความดัน / ไม่มี':'e.g. Diabetes / Hypertension / None','ระบุชื่อยา หรือพิมพ์ว่าไม่มี':'Enter medicine names, or type “None”.','เช่น เคยผ่าตัด... / เคยรักษา... / ไม่มี':'e.g. Previous surgery... / Previous treatment... / None','พิมพ์ข้อมูลที่อยากให้แพทย์ทราบ':'Type information you want the doctor to know','เช่น มิน / Doctor A / Somchai':'e.g. Min / Doctor A / Somchai','เช่น ปุ่มเกมกดแล้วไม่ไปหน้าถัดไป หรืออยากให้เพิ่มคำศัพท์เกี่ยวกับ...':'e.g. The game button does not go to the next page, or I would like more vocabulary about...','เช่น มิน / ไม่ระบุ':'e.g. Min / Prefer not to say','ค้นหาคำศัพท์ เช่น ปวด ไข้ หัวใจ...':'Search vocabulary, e.g. pain, fever, heart...'
  });


  Object.assign(dict, {
    'การจัดพื้นที่ช่วยเรื่องการสื่อสารได้ แต่ไม่ควรใช้เป็นเหตุให้เลื่อนการประเมินอาการที่อาจเร่งด่วน':'A quieter setting can support communication, but it should not delay assessment of potentially urgent symptoms.',
    'การช่วยพยุงอาจจำเป็นตามสถานการณ์ แต่ไม่ควรแทนผู้ป่วยในการสื่อสารโดยอัตโนมัติ':'Assistance with walking may be needed, but it should not automatically replace the patient’s communication.',
    'การพิมพ์เป็นตัวช่วยที่ดี แต่ไม่จำเป็นต้องตัดการพูดทั้งหมด หากผู้ป่วยยังเข้าใจการพูดร่วมกับการพิมพ์ได้':'Typing can be helpful, but speaking does not need to stop if the patient can understand speech together with written information.',
    'การพูดเร็วขึ้นอาจทำให้เข้าใจยากกว่าเดิม และไม่ได้แก้ปัญหาที่ผู้ป่วยมองปากได้ไม่ชัด':'Speaking faster may make understanding harder and does not solve difficulty seeing the speaker’s lips.',
    'การพูดเร็วขึ้นไม่ได้ช่วยให้ผู้ที่พึ่งการอ่านปากเข้าใจง่ายขึ้น และอาจทำให้ข้อมูลตกหล่น':'Speaking faster does not make lip-reading easier and may cause information to be missed.',
    'การให้ยืนต่อโดยไม่จำเป็นเพิ่มความเสี่ยงต่อการล้ม ในขณะที่ผู้ป่วยยังไม่มั่นคง':'Keeping the patient standing unnecessarily increases the risk of falling while they are still unsteady.',
    'ขอให้ผู้ป่วยถอดหน้ากากตลอดการพูดคุยเพื่อให้เห็นปากชัด':'Ask the patient to remove their mask throughout the conversation so you can see their lips clearly.',
    'ขอให้พูดช้าลง และพิมพ์ข้อมูลสำคัญให้ดู':'Ask the patient to slow down and type important information to show you.',
    'ข้อมูลเพิ่มเติมมีประโยชน์ แต่แน่นหน้าอกร่วมกับเหนื่อยและเป็นมากขึ้นเมื่อออกแรงไม่ควรทำให้การประเมินล่าช้า':'Additional information is useful, but chest tightness with shortness of breath that worsens with exertion should not delay assessment.',
    'ข้อใดเหมาะที่สุดสำหรับการเริ่มซักถามผู้ป่วยรายนี้?':'Which approach is most appropriate to begin assessing this patient?',
    'คลื่นไส้เล็กน้อย เบื่ออาหาร และปวดมากขึ้นเวลาเดิน':'Mild nausea, loss of appetite, and pain that worsens when walking.',
    'ความไวต่อแสงไม่ได้หมายความว่าต้องทำให้มืดจนผู้ป่วยมองใบหน้าไม่ได้ เพราะผู้ป่วยใช้การอ่านปากช่วยเข้าใจคำพูด':'Light sensitivity does not mean the room should be made so dark that the patient cannot see your face, because they use lip-reading to understand speech.',
    'จัดพื้นที่ที่เงียบขึ้นเพื่อเก็บข้อมูลอาการให้ครบ และส่งต่อเพื่อประเมินตามความเหมาะสมโดยไม่วินิจฉัยเอง':'Move to a quieter area, gather the symptom information, and refer for appropriate assessment without diagnosing the condition yourself.',
    'จากข้อมูลทั้งหมด ข้อใดควรทำเป็นลำดับแรก?':'Based on all the information, what should be done first?',
    'จากข้อมูลนี้ ข้อใดเป็นแนวทางที่เหมาะที่สุดในการเริ่มดูแล?':'Based on this information, what is the most appropriate way to begin care?',
    'ถูกต้องค่ะ':'Correct.',
    'ถูกต้องค่ะ อาการลักษณะนี้มีสาเหตุได้หลายอย่าง จึงควรเก็บข้อมูลและให้บุคลากรที่เกี่ยวข้องประเมินต่อ พร้อมลดเสียงรบกวนเพื่อไม่ให้ข้อมูลตกหล่น':'Correct. These symptoms can have several causes, so gather more information and arrange appropriate assessment while reducing background noise so information is not missed.',
    'ถูกต้องค่ะ เพราะผู้ป่วยใช้การอ่านปากเป็นหลัก หน้ากากอาจเป็นอุปสรรค จึงควรเพิ่มช่องทางอื่นโดยยังคำนึงถึงความปลอดภัย':'Correct. The patient relies mainly on lip-reading, and a mask can make this difficult. Add another communication method while maintaining safety.',
    'ถูกต้องค่ะ เพราะวิธีนี้แก้ทั้งสภาพแวดล้อมและช่องทางการรับข้อมูล โดยไม่ตัดผู้ป่วยออกจากการสื่อสาร':'Correct. This addresses both the environment and the way information is received without excluding the patient from communication.',
    'ถูกต้องค่ะ เพราะอาการเจ็บหน้าอกร่วมกับเหนื่อยควรได้รับการประเมินอย่างเหมาะสมโดยเร็ว และข้อจำกัดด้านการได้ยินไม่ควรเป็นอุปสรรคต่อการรับข้อมูล':'Correct. Chest pain with shortness of breath should be assessed appropriately and promptly, and hearing difficulties should not prevent the patient from receiving information.',
    'ถูกต้องค่ะ เมื่อผู้ป่วยยังโคลงเคลงควรคำนึงถึงความปลอดภัยก่อน และสามารถใช้การพูดช้าร่วมกับการพิมพ์ตามความต้องการของผู้ป่วย':'Correct. When the patient is still unsteady, safety comes first. Slow speech can be combined with typing according to the patient’s needs.',
    'ทดลองอ่านใบสรุปอาการ · หมอเข้าใจ':'Practice Reading a Symptom Summary · MOR KHAO JAI',
    'ประมาณ 1 วัน':'About 1 day','ประมาณ 10 ชั่วโมง':'About 10 hours','ประมาณ 18 ชั่วโมง':'About 18 hours','ประมาณ 3 ชั่วโมง':'About 3 hours',
    'ปวดท้องด้านขวาล่างตั้งแต่เมื่อคืน':'Right lower abdominal pain since last night.',
    'ปวดศีรษะตั้งแต่เมื่อวาน และวันนี้ปวดมากขึ้น':'Headache since yesterday, worse today.',
    'ผู้ติดตามช่วยได้ แต่ควรสื่อสารกับผู้ป่วยโดยตรงและให้ผู้ป่วยมีส่วนร่วมเท่าที่ทำได้':'A companion can help, but communicate directly with the patient and involve them as much as possible.',
    'ผู้ติดตามช่วยได้ แต่ไม่ควรแทนผู้ป่วยโดยอัตโนมัติ ควรพยายามสื่อสารกับผู้ป่วยโดยตรงด้วยวิธีที่เหมาะสม':'A companion can help, but should not automatically replace the patient. Try to communicate directly with the patient using an appropriate method.',
    'ผู้ป่วยยังไม่มั่นคงขณะยืนและขอให้พูดช้าพร้อมพิมพ์ข้อมูลสำคัญ ข้อใดเหมาะที่สุด?':'The patient is still unsteady while standing and asks you to speak slowly and type important information. What is most appropriate?',
    'ผู้ป่วยใช้การอ่านปากเป็นหลักและกำลังสวมหน้ากาก ข้อใดเหมาะที่สุดระหว่างการประเมิน?':'The patient relies mainly on lip-reading and is wearing a mask. What is most appropriate during assessment?',
    'พาผู้ป่วยไปนั่งพักในพื้นที่เงียบก่อน แล้วค่อยประเมินเมื่ออาการสงบ':'Have the patient sit and rest in a quiet area first, then assess them when their symptoms settle.',
    'พูดเร็วขึ้นเล็กน้อยเพื่อให้ใช้เวลาซักถามน้อยลง':'Speak slightly faster to reduce the time needed for questions.',
    'พูดให้ดังและเร็วขึ้นเพื่อให้ผู้ป่วยจับคำสำคัญได้':'Speak louder and faster so the patient can catch the key words.',
    'มีข้อจำกัดด้านการได้ยิน ต้องการให้หันหน้าเข้าหาและพูดชัด หากไม่เข้าใจให้เขียนหรือพิมพ์':'Has a hearing difficulty and wants you to face them and speak clearly. If they do not understand, write or type the information.',
    'มีข้อจำกัดด้านการได้ยินและใช้การอ่านปากเป็นหลัก หน้ากากทำให้อ่านปากได้ยาก':'Has a hearing difficulty and relies mainly on lip-reading. A mask makes lip-reading difficult.',
    'มีไข้และไอตั้งแต่เมื่อคืน':'Fever and cough since last night.',
    'ยังไม่มั่นคงขณะยืน ไม่มีเจ็บหน้าอก':'Still unsteady while standing, with no chest pain.',
    'ยังไม่ใช่ตัวเลือกที่เหมาะที่สุด — ลองตอบใหม่ได้เลย':'This is not the best option yet — try again.',
    'ย้ายไปจุดที่มีสิ่งรบกวนน้อย ให้ผู้ป่วยเห็นใบหน้าชัด และถามทีละประเด็น':'Move to a less distracting area, make sure the patient can see your face clearly, and ask one point at a time.',
    'ระยะเวลา':'Duration',
    'ลดแสงให้มืดที่สุดและให้ผู้ป่วยหลับตาระหว่างตอบคำถาม':'Make the room as dark as possible and ask the patient to close their eyes while answering.',
    'สรุปทันทีว่าเป็นไส้ติ่งอักเสบและเตรียมการรักษาเฉพาะโรค':'Immediately conclude that it is appendicitis and prepare disease-specific treatment.',
    'สิ่งที่ควรรู้':'What to know',
    'หันหน้าเข้าหาผู้ป่วย พูดชัดเจน และใช้การเขียนหรือพิมพ์เสริมเมื่ออ่านปากได้ยาก':'Face the patient, speak clearly, and use writing or typing when lip-reading is difficult.',
    'อาการปวดท้องขวาล่างพบได้ในไส้ติ่งอักเสบ แต่ข้อมูลเท่านี้ยังไม่ควรใช้วินิจฉัยโรคหรือกำหนดการรักษาเอง':'Right lower abdominal pain can occur with appendicitis, but this information alone should not be used to diagnose or decide treatment.',
    'อาการปวดท้องด้านขวาล่างที่เป็นต่อเนื่องและมากขึ้นเมื่อเคลื่อนไหวควรได้รับการประเมิน ไม่จำเป็นต้องรอให้มีไข้ก่อน':'Persistent right lower abdominal pain that worsens with movement should be assessed; there is no need to wait for a fever.',
    'อาการร่วม':'Associated symptoms','อาการหลัก':'Main symptom',
    'อ่านปากได้ดีเมื่อเห็นใบหน้าชัด แต่บริเวณรอมีคนพูดหลายคนพร้อมกัน':'Can lip-read well when the face is clearly visible, but several people are speaking at once in the waiting area.',
    'เคส 1 · เจ็บหน้าอก':'Case 1 · Chest Pain','เคส 2 · ปวดศีรษะ':'Case 2 · Headache','เคส 3 · เวียนศีรษะ':'Case 3 · Dizziness','เคส 4 · ปวดท้อง':'Case 4 · Abdominal Pain','เคส 5 · ไข้และไอ':'Case 5 · Fever and Cough',
    'เจ็บคอเล็กน้อย อ่อนเพลีย และยังไม่มีข้อมูลว่าหอบเหนื่อย':'Mild sore throat and fatigue, with no information suggesting shortness of breath.',
    'เปลี่ยนเป็นพิมพ์ทุกอย่างแทนการพูดทันที':'Switch to typing everything instead of speaking immediately.',
    'เริ่มประมาณ 20 นาทีก่อนมาถึง':'Started about 20 minutes before arrival.',
    'เวียนศีรษะและโคลงเคลงหลังลุกจากเก้าอี้':'Dizziness and unsteadiness after standing up from a chair.',
    'เหนื่อยเล็กน้อย และกลับมาเมื่อเดินเร็ว':'Mild shortness of breath that returns when walking quickly.',
    'แจ้งทีมให้ประเมินอาการโดยเร็ว พร้อมจัดวิธีสื่อสารที่ผู้ป่วยเข้าใจได้ระหว่างการประเมิน':'Alert the team for prompt assessment and use a communication method the patient can understand during assessment.',
    'แน่นกลางหน้าอกเป็น ๆ หาย ๆ ตั้งแต่ช่วงเช้า':'Intermittent central chest tightness since this morning.',
    'แบบฝึกนี้เน้นถึงการจัดลำดับความสำคัญและการสื่อสาร ไม่ใช่วินิจฉัยโรคจากเพียงข้อมูลเท่านี้':'This exercise focuses on prioritization and communication, not diagnosing a disease from this information alone.',
    'ใช้เครื่องช่วยฟัง แต่เสียงรอบข้างทำให้ฟังคำถามยาก ต้องการบริเวณที่เงียบ':'Uses a hearing aid, but background noise makes questions difficult to hear and a quiet area is preferred.',
    'ให้ญาติหรือเจ้าหน้าที่อีกคนพูดแทน เพื่อไม่ให้ผู้ป่วยต้องอ่านปาก':'Ask a relative or another staff member to speak instead so the patient does not need to lip-read.',
    'ให้ผู้ติดตามเป็นผู้ตอบคำถามทั้งหมดแทน เพื่อให้ซักประวัติได้เร็วขึ้น':'Let the companion answer all questions instead so the history can be taken faster.',
    'ให้ผู้ติดตามเป็นผู้สื่อสารหลักแทนผู้ป่วยตลอดการซักถาม':'Let the companion be the main communicator instead of the patient throughout the history-taking.',
    'ให้ผู้ป่วยกรอกข้อมูลอาการให้ครบก่อน แล้วค่อยแจ้งทีมที่เกี่ยวข้อง':'Have the patient complete all symptom information first, then notify the relevant team.',
    'ให้ผู้ป่วยนั่งหรืออยู่ในตำแหน่งที่ปลอดภัยก่อน แล้วประเมินอาการต่อพร้อมใช้วิธีสื่อสารที่ผู้ป่วยเข้าใจ':'Have the patient sit or stay in a safe position first, then continue assessment using a communication method the patient understands.',
    'ให้ผู้ป่วยยืนต่อเพื่อดูว่าอาการจะหายเองหรือไม่':'Have the patient keep standing to see whether the symptoms go away on their own.',
    'ให้ผู้ป่วยเดินไปมาเพื่อดูว่าอาการปวดเปลี่ยนแปลงหรือไม่':'Have the patient walk around to see whether the pain changes.',
    'ให้รอจนกว่าจะมีไข้จึงค่อยพิจารณาว่าต้องประเมินเพิ่มเติมหรือไม่':'Wait for a fever before deciding whether further assessment is needed.',
    'ให้เจ้าหน้าที่จับตัวไว้แล้วซักถามผู้ติดตามแทน':'Have staff hold the patient and question the companion instead.',
    'ไม่ควรสรุปว่าต้องถอดหน้ากากเสมอ เพราะต้องคำนึงถึงความปลอดภัยและมาตรการของสถานพยาบาล':'Do not assume the mask should always be removed; safety and facility policies must be considered.',
    'ไม่ควรเปลี่ยนผู้สื่อสารแทนผู้ป่วยโดยอัตโนมัติ และการเพิ่มผู้พูดอาจทำให้สับสนมากขึ้น':'Do not automatically replace the patient as the communicator. Adding another speaker may cause more confusion.',
    'ไม่จำเป็นต้องให้ผู้ป่วยทำกิจกรรมที่เพิ่มอาการปวดเพื่อเก็บข้อมูล เพราะสามารถซักประวัติและประเมินตามขั้นตอนได้':'The patient does not need to perform an activity that increases pain just to collect information; history-taking and assessment can be done safely step by step.',
    'ไวต่อแสงเล็กน้อย ไม่มีไข้ ไม่มีอาเจียน':'Mild sensitivity to light, with no fever or vomiting.',
    'กรุณาสร้างบัตรก่อนปริ้น':'Please create the card before printing.',
    'กรุณาเลือกวิธีการสื่อสารอย่างน้อย 1 วิธี':'Please select at least one communication method.',
    'คัดลอกข้อความเรียบร้อยแล้ว ✓':'Text copied successfully ✓',
    'ไม่สามารถคัดลอกอัตโนมัติได้':'Automatic copying is not available.',
    'กรุณาสร้างใบสรุปประวัติก่อนปริ้น':'Please create the health summary before printing.',
    'ต้องการล้างข้อมูลทั้งหมดใช่ไหม?':'Are you sure you want to clear all information?',
    'ยังไม่มีข้อความให้คัดลอก':'There is no text to copy yet.',
    'ล้างข้อมูลเรียบร้อยแล้ว':'Information cleared successfully.',
    'สร้างเมื่อ':'Created on','อายุ:':'Age:','เพศ:':'Gender:','แก้ไขข้อความในช่องด้านบนได้เลย':'You can edit the text above.','ไม่ได้ระบุ':'Not specified',
    'กรุณาเลือกช่วงอายุค่ะ':'Please select an age group.','กรุณาใช้ชื่อที่สุภาพค่ะ':'Please use a respectful name.','กรุณาใส่ชื่อที่ต้องการให้เรียกค่ะ':'Please enter the name you would like us to use.',
    'ฝึกแล้ว ✓':'Practiced ✓','ลองพูดตาม':'Try repeating','พยาบาล':'Nurse','หมอ':'Doctor','หายใจ':'Breathing','เวียนหัว':'Dizziness','ไข้':'Fever','ไอ':'Cough','ยา':'Medicine','ปวด':'Pain','ผู้เล่น':'Player'
  });


  Object.assign(dict, {
    'ปี':'years','ชื่อ:':'Name:','กำลังส่งรายงาน...':'Submitting report...','ส่งไม่สำเร็จ ลองใหม่อีกครั้งครับ':'Submission failed. Please try again.','ไม่มีอินเทอร์เน็ต ลองใหม่อีกครั้งครับ':'No internet connection. Please try again.',
    'คะแนน':'Score','ขา':'Leg','ท้อง':'Abdomen','หน้าอก':'Chest','หลัง':'Back','แขน':'Arm','ฉันไม่เข้าใจ':'I do not understand','ช่วยพูดช้าลงหน่อย':'Please speak more slowly','ช่วยเขียนให้ดูหน่อย':'Please write it down','ตรวจการได้ยิน':'Hearing test','ต้องการความช่วยเหลือด้านการสื่อสาร':'Need communication support','มองหน้า':'Face the patient','รักษา':'Treatment','ร้านขายยา':'Pharmacy','ล่ามภาษามือ':'Sign language interpreter','หูอื้อ':'Blocked or muffled ear','อ่อนเพลีย':'Fatigue','เสียงดังในหู':'Ringing in the ear','ได้ยินไม่ชัด':'Hard of hearing','แผนก':'Department'
  });

  Object.assign(dict, { 'คำ':'words' });

  const originals = new WeakMap();

  const sortedKeys = Object.keys(dict).sort((a,b)=>b.length-a.length);

  function translateString(source, lang) {
    if (lang !== 'en') return source;
    let text = source;
    sortedKeys.forEach(thai => { text = text.split(thai).join(dict[thai]); });

    // Common sentence templates used throughout the health-word pages.
    text = text.replace(/^หมอเข้าใจ\s*-\s*(.+)$/, 'MOR KHAO JAI - $1');
    text = text.replace(/^ลองฝึกใช้คำว่า “(.+?)” เพื่อบอกอาการกับบุคลากรทางการแพทย์$/, 'Practice using “$1” to describe the symptom to healthcare staff.');
    text = text.replace(/^ลองฝึกใช้คำว่า “(.+?)” ในการสื่อสารกับบุคลากรทางการแพทย์$/, 'Practice using “$1” when communicating with healthcare staff.');
    text = text.replace(/^ลองฝึกใช้คำว่า “(.+?)” เพื่อสื่อสารเกี่ยวกับ(.+)$/, 'Practice using “$1” to communicate about $2.');
    text = text.replace(/^ลองฝึกใช้คำว่า “(.+?)” เพื่อบอกอาการหรือบริเวณที่มีอาการกับบุคลากรทางการแพทย์$/, 'Practice using “$1” to describe the symptom or affected area to healthcare staff.');
    text = text.replace(/^ใช้บอกว่า(.+)$/, 'Used to say that $1');
    text = text.replace(/^การใช้(.+)เพื่อช่วย(.+)$/, 'Using $1 to help $2');
    text = text.replace(/^การวัด(.+)$/, 'Measuring $1');
    text = text.replace(/^การตรวจตัวอย่าง(.+)$/, 'Testing a sample of $1');
    text = text.replace(/^การใช้รังสีเอกซ์(.+)$/, 'Using X-rays $1');
    text = text.replace(/^การใช้คลื่นเสียงความถี่สูง(.+)$/, 'Using high-frequency sound waves $1');
    text = text.replace(/^การให้ยาเข้าสู่ร่างกาย(.+)$/, 'Giving medicine into the body $1');
    text = text.replace(/^การเข้าพักรักษาตัวในโรงพยาบาล(.+)$/, 'Staying in hospital $1');
    text = text.replace(/^อาการที่(.+)$/, 'A symptom in which $1');
    text = text.replace(/^ภาวะที่(.+)$/, 'A condition in which $1');
    text = text.replace(/^รวม(.+)ไว้ในหัวข้อเดียว(.+)$/, 'A single topic combining $1 $2');
    text = text.replace(/^เลือก(.+)$/, 'Choose $1');
    text = text.replace(/^ดูวิดีโอแล้วลอง(.+)$/, 'Watch the video and try to $1');

    // If a rare Thai fragment remains, keep the page readable with a neutral English label
    // rather than mixing Thai into English mode. This only applies to unmapped text nodes.
    return text;
  }

  function translatePage(lang) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const parent = node.parentElement;
      if (parent && ['SCRIPT','STYLE','NOSCRIPT'].includes(parent.tagName)) return;
      if (!originals.has(node)) originals.set(node, node.nodeValue);
      node.nodeValue = translateString(originals.get(node), lang);
    });

    document.querySelectorAll('[placeholder],[title],[aria-label],[alt]').forEach(el => {
      ['placeholder','title','aria-label','alt'].forEach(attr => {
        if (!el.hasAttribute(attr)) return;
        const key = `__mkj_${attr}`;
        if (!el.dataset[key]) el.dataset[key] = el.getAttribute(attr);
        el.setAttribute(attr, translateString(el.dataset[key], lang));
      });
    });
  }

  window.setLang = function (lang) {
    const selectedLang = lang === 'en' ? 'en' : 'th';

    localStorage.setItem(
      'morkaojai-language',
      selectedLang
    );

    document.documentElement.lang =
      selectedLang === 'en' ? 'en' : 'th';

    if (selectedLang === 'en') {
      const translatedTitle = translateString(document.title, 'en');
      if (translatedTitle && !/[ก-๙]/.test(translatedTitle)) document.title = translatedTitle;
    }

    translatePage(selectedLang);

    if (typeof window.mkjAfterLanguageChange === 'function') {
      window.mkjAfterLanguageChange(selectedLang);
    }

    document.querySelectorAll('[data-lang]').forEach(button => {
      button.classList.toggle(
        'active',
        button.dataset.lang === selectedLang
      );
    });
  };


  function translateAddedNodes(root) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const parent = node.parentElement;
      if (parent && ['SCRIPT','STYLE','NOSCRIPT'].includes(parent.tagName)) return;
      if (!originals.has(node)) originals.set(node, node.nodeValue);
      node.nodeValue = translateString(originals.get(node), document.documentElement.lang === 'en' ? 'en' : 'th');
    });
  }

  const observer = new MutationObserver(mutations => {
    if (document.documentElement.lang !== 'en') return;
    mutations.forEach(m => m.addedNodes.forEach(node => {
      if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE) translateAddedNodes(node);
    }));
  });

  document.addEventListener('DOMContentLoaded', () => {
    let switcher = document.querySelector('.mkj-lang');

    if (!switcher) {
      switcher = document.querySelector('.lang');
    }

    if (switcher) {
      switcher.querySelectorAll('button').forEach(button => {
        const text = (button.textContent || '').trim();

        let lang = null;

        if (text === 'EN') {
          lang = 'en';
        } else if (text === 'ไทย' || text === 'Thai') {
          lang = 'th';
        }

        if (lang) {
          button.dataset.lang = lang;
          button.onclick = () => window.setLang(lang);
        }
      });
    } else {
      switcher = document.createElement('div');
      switcher.className = 'mkj-lang';

      switcher.innerHTML = `
        <button type="button" data-lang="th">ไทย</button>
        <button type="button" data-lang="en">EN</button>
      `;

      switcher.querySelectorAll('button').forEach(button => {
        button.addEventListener(
          'click',
          () => window.setLang(button.dataset.lang)
        );
      });

      document.body.prepend(switcher);
    }

    observer.observe(document.body, { childList: true, subtree: true });

    window.setLang(
      localStorage.getItem('morkaojai-language') || 'th'
    );
  });
})();