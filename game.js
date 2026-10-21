/* =========================================
   MOR KHAO JAI — SIGN LANGUAGE GAME
========================================= */

/* =========================================
   1. VOCABULARY POOL (คลังคำศัพท์และวิดีโอทั้งหมด)
========================================= */

const vocabularyPool = [
    { meaning: "ปวดท้อง", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792557078/%E0%B8%9B%E0%B8%A7%E0%B8%94%E0%B8%97%E0%B9%89%E0%B8%AD%E0%B8%87.mp4", explanation: "ใช้เมื่อรู้สึกปวดหรือไม่สบายบริเวณท้อง" },
    { meaning: "ท้องเสีย", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792556858/%E0%B8%97%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%AA%E0%B8%B5%E0%B8%A2.mp4", explanation: "อาการถ่ายอุจจาระเหลวหรือเป็นน้ำมากกว่าปกติ" },
    { meaning: "คลื่นไส้", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792556683/%E0%B8%84%E0%B8%A5%E0%B8%B7%E0%B9%88%E0%B8%99%E0%B9%84%E0%B8%AA%E0%B9%89.mp4", explanation: "อาการพะอืดพะอม อยากจะอาเจียน" },
    { meaning: "อาเจียนไหม", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792556906/%E0%B8%AD%E0%B8%B2%E0%B9%80%E0%B8%88%E0%B8%B5%E0%B8%A2%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%AB%E0%B8%A1.mp4", explanation: "คำถามถามผู้ป่วยว่ามีอาการอ้วกหรืออาเจียนหรือไม่" },
    { meaning: "กินข้าวได้ไหม", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792557024/%E0%B8%81%E0%B8%B4%E0%B8%99%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B9%84%E0%B8%94%E0%B9%89%E0%B9%84%E0%B8%AB%E0%B8%A1.mp4", explanation: "คำถามประเมินการรับประทานอาหารของผู้ป่วย" },
    { meaning: "เจ็บ", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792556747/%E0%B9%80%E0%B8%88%E0%B9%87%E0%B8%9A.mp4", explanation: "รู้สึกเจ็บปวดบริเวณร่างกาย" },
    { meaning: "ปวด", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792556694/%E0%B8%9B%E0%B8%A7%E0%B8%94.mp4", explanation: "ความรู้สึกไม่สบายกายจากอาการปวด" },
    { meaning: "เจ็บหน้าอกไหม", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792556723/%E0%B9%80%E0%B8%88%E0%B9%87%E0%B8%9A%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%AD%E0%B8%81%E0%B9%84%E0%B8%AB%E0%B8%A1.mp4", explanation: "คำถามสำคัญเพื่อเช็กอาการแน่นหรือเจ็บหน้าอก" },
    { meaning: "ปวดแขนไหม", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792556737/%E0%B8%9B%E0%B8%A7%E0%B8%94%E0%B8%B1%E0%B8%82%E0%B8%99%E0%B9%84%E0%B8%AB%E0%B8%A1.mp4", explanation: "ถามถึงอาการปวดบริเวณแขน" },
    { meaning: "ปวดหัวไหม", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792557081/%E0%B8%9B%E0%B8%A7%E0%B8%94%E0%B8%AB%E0%B8%B1%E0%B8%A7%E0%B9%84%E0%B8%AB%E0%B8%A1.mp4", explanation: "ถามว่ามีอาการปวดศีรษะหรือไม่" },
    { meaning: "ไม่สบายนานรึยัง", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792557102/%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%AA%E0%B8%9A%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B8%99%E0%B8%A3%E0%B8%B6%E0%B8%A2%E0%B8%B1%E0%B8%87.mp4", explanation: "ถามระยะเวลาของอาการป่วย" },
    { meaning: "มีไข้สูงไหม", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792556776/%E0%B8%A1%E0%B8%B5%E0%B9%84%E0%B8%82%E0%B9%89%E0%B8%AA%E0%B8%B9%E0%B8%87%E0%B9%84%E0%B8%AB%E0%B8%A1.mp4", explanation: "ถามเกี่ยวกับอุณหภูมิร่างกายหรืออาการไข้" },
    { meaning: "มีน้ำมูกไหม", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792557077/%E0%B8%A1%E0%B8%B5%E0%B9%81%E0%B9%89%E0%B8%A1%E0%B8%B9%E0%B8%81%E0%B9%84%E0%B8%AB%E0%B8%A1.mp4", explanation: "ถามอาการคัดจมูกหรือมีน้ำมูก" },
    { meaning: "เจ็บคอไหม", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792556857/%E0%B9%80%E0%B8%88%E0%B9%87%E0%B8%9A%E0%B8%84%E0%B8%AD%E0%B9%84%E0%B8%AB%E0%B8%A1.mp4", explanation: "ถามอาการระคายเคืองหรือเจ็บภายในลำคอ" },
    { meaning: "ป่วยเป็นอะไร", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792556737/%E0%B8%9B%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3%E0%B8%A1%E0%B8%B2.mp4", explanation: "สอบถามอาการเบื้องต้นของผู้ป่วย" },
    { meaning: "ไม่สบาย", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792556699/%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%AA%E0%B8%9A%E0%B8%B2%E0%B8%A2.mp4", explanation: "รู้สึกมีไข้หรือร่างกายผิดปกติ" },
    { meaning: "น้ำหนักเพิ่มไหม", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792556760/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B9%84%E0%B8%AB%E0%B8%A1.mp4", explanation: "ถามประวัติการเปลี่ยนแปลงของน้ำหนักตัว" },
    { meaning: "ที่ไม่สบายหายรึยัง", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792556948/%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%AA%E0%B8%9A%E0%B8%B2%E0%B8%A2%E0%B8%AB%E0%B8%B2%E0%B8%A2%E0%B8%A3%E0%B8%B6%E0%B8%A2%E0%B8%B1%E0%B8%87.mp4", explanation: "ถามการติดตามผลการรักษาว่าหายป่วยหรือยัง" },
    { meaning: "นิดหน่อย", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792556710/%E0%B8%99%E0%B8%B4%E0%B8%94%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%AD%E0%B8%A2.mp4", explanation: "บอกระดับความรุนแรงของอาการว่าเล็กน้อย" },
    { meaning: "มาก", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792556731/%E0%B8%A1%E0%B8%B2%E0%B8%81.mp4", explanation: "บอกระดับความรุนแรงของอาการว่าปวดหรือเจ็บมาก" },
    { meaning: "ดีขึ้นไหม", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792556956/%E0%B8%94%E0%B8%B5%E0%B8%82%E0%B8%B6%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%AB%E0%B8%A1.mp4", explanation: "ถามความรู้สึกหลังการรักษาว่าดีขึ้นหรือไม่" },
    { meaning: "ตั้งครรภ์", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792564308/%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%A0%E0%B9%8C.mp4", explanation: "ภาวะมีครรภ์หรือมีบุตรในท้อง" },
    { meaning: "คลอดลูก", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792564308/%E0%B8%84%E0%B8%A5%E0%B8%AD%E0%B8%94%E0%B8%A5%E0%B8%B9%E0%B8%81.mp4", explanation: "การให้กำเนิดทารก" },
    { meaning: "หูตึง", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792564319/%E0%B8%AB%E0%B8%B9%E0%B8%95%E0%B8%B6%E0%B8%87.mp4", explanation: "ภาวะบกพร่องทางการได้ยิน" },
    { meaning: "หูหนวกตาบอด", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792564417/%E0%B8%AB%E0%B8%B9%E0%B8%AB%E0%B8%99%E0%B8%A7%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%9A%E0%B8%AD%E0%B8%94.mp4", explanation: "ภาวะที่มีความบกพร่องทั้งการได้ยินและการมองเห็น" },
    { meaning: "เป็นใบ้", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792564484/%E0%B9%80%E0%B8%B2%E0%B9%87%E0%B8%99%E0%B9%83%E0%B8%9A%E0%B9%89.mp4", explanation: "บุคคลที่ไม่สามารถเปล่งเสียงพูดออกมาเป็นคำพูดได้ตามปกติ" },
    { meaning: "ล่ามภาษามือ", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792564341/%E0%B8%A5%E0%B9%88%E0%B8%B2%E0%B8%A1%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%B2%E0%B8%A1%E0%B8%B7%E0%B8%AD.mp4", explanation: "ผู้ทำหน้าที่ถ่ายทอดภาษามือและภาษาพูด" },
    { meaning: "เจาะเลือด", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792557095/%E0%B9%80%E0%B8%88%E0%B8%B2%E0%B8%B0%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%94.mp4", explanation: "การเก็บตัวอย่างเลือดส่งตรวจวิเคราะห์" },
    { meaning: "เลือด", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792557077/%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%94.mp4", explanation: "โลหิตในร่างกาย" },
    { meaning: "X-ray", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792556707/X-ray.mp4", explanation: "การตรวจเอกซเรย์ภาพถ่ายภายในร่างกาย" },
    { meaning: "CT-scan", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792556703/CT-scan.mp4", explanation: "การตรวจเอกซเรย์คอมพิวเตอร์" },
    { meaning: "กินยาหลังอาหาร", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792556918/%E0%B8%81%E0%B8%B4%E0%B8%99%E0%B8%A2%E0%B8%B2%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3.mp4", explanation: "คำแนะนำการรับประทานยาหลังทานอาหารเสร็จ" },
    { meaning: "กินยาก่อนอาหาร", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792556967/%E0%B8%81%E0%B8%B4%E0%B8%99%E0%B8%A2%E0%B8%B2%E0%B8%81%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3.mp4", explanation: "คำแนะนำการรับประทานยาก่อนมื้ออาหาร" },
    { meaning: "เช้าเที่ยงเย็น", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792557274/%E0%B9%80%E0%B8%88%E0%B9%87%E0%B8%8A%E0%B8%B2%E0%B8%88%E0%B9%87%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%87%E0%B9%80%E0%B8%A2%E0%B9%87%E0%B8%99.mp4", explanation: "ช่วงเวลาในการทานยาวันละ 3 มื้อ" },
    { meaning: "ก่อนนอน", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792556700/%E0%B8%81%E0%B8%B8%E0%B8%81%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%99%E0%B8%AD%E0%B8%99.mp4", explanation: "การรับประทานยาก่อนเข้านอน" },
    { meaning: "ครั้งหน้าพบกัน", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792556825/%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%9E%E0%B8%9A%E0%B8%81%E0%B8%B1%E0%B8%99.mp4", explanation: "คำบอกลาการนัดหมายครั้งถัดไป" },
    { meaning: "หมอ", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792564307/%E0%B8%AB%E0%B8%A1%E0%B8%AD.mp4", explanation: "แพทย์ผู้ตรวจรักษา" },
    { meaning: "สูติแพทย์", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792564437/%E0%B8%AA%E0%B8%B9%E0%B8%95%E0%B8%B4%E0%B8%99%E0%B8%B2%E0%B8%A3%E0%B8%B5%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C.mp4", explanation: "แพทย์ผู้เชี่ยวชาญด้านระบบสืบพันธุ์สตรีและการตั้งครรภ์" },
    { meaning: "นักกายภาพบำบัด", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792564452/%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B2%E0%B8%A2%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9A%E0%B8%B3%E0%B8%9A%E0%B8%B1%E0%B8%94.mp4", explanation: "ผู้เชี่ยวชาญการฟื้นฟูการเคลื่อนไหวร่างกาย" },
    { meaning: "พยาบาล", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792564471/%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5.mp4", explanation: "ผู้ดูแลและพยาบาลผู้ป่วย" },
    { meaning: "จิตแพทย์", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792564440/%E0%B8%88%E0%B8%B4%E0%B8%95%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C.mp4", explanation: "แพทย์ผู้เชี่ยวชาญสุขภาพจิต" },
    { meaning: "ทันตแพทย์", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792564344/%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%95%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C.mp4", explanation: "หมอฟัน" },
    { meaning: "แพทย์หูคอจมูก", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792564383/%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C%E0%B8%AB%E0%B8%B9%E0%B8%84%E0%B8%AD%E0%B8%88%E0%B8%A1%E0%B8%B9%E0%B8%81.mp4", explanation: "แพทย์เฉพาะทางด้านหู คอ และจมูก" },
    { meaning: "จักษุแพทย์", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792564435/%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%B8%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C.mp4", explanation: "หมอตา" },
    { meaning: "อายุรแพทย์", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792564390/%E0%B8%AD%E0%B8%B2%E0%B8%A2%E0%B8%B8%E0%B8%A3%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C.mp4", explanation: "แพทย์เฉพาะทางอายุรกรรมโรคทั่วไป" },
    { meaning: "กุมารแพทย์", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792564471/%E0%B8%81%E0%B8%B8%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C.mp4", explanation: "หมอเด็ก" },
    { meaning: "ศัลยแพทย์", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792564345/%E0%B8%A8%E0%B8%B1%E0%B8%A5%E0%B8%A2%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C.mp4", explanation: "หมอผ่าตัด" },
    { meaning: "เจ้าหน้าที่/บุคลากร", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792564408/%E0%B9%80%E0%B8%88%E0%B9%89%E0%B8%B2%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88_%E0%B8%9A%E0%B8%B8%E0%B8%84%E0%B8%A5%E0%B8%B2%E0%B8%81%E0%B8%A3.mp4", explanation: "บุคลากรผู้ให้บริการในโรงพยาบาล" },
    { meaning: "คนเข็นเปล", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792564346/%E0%B8%84%E0%B8%99%E0%B9%80%E0%B8%82%E0%B9%87%E0%B8%99%E0%B8%8B%E0%B9%80%E0%B8%9B%E0%B8%A5.mp4", explanation: "เจ้าหน้าที่เคลื่อนย้ายผู้ป่วย" },
    { meaning: "ยาม", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792564343/%E0%B8%A2%E0%B8%B2%E0%B8%A1.mp4", explanation: "เจ้าหน้าที่รักษาความปลอดภัย" },
    { meaning: "ญาติผู้ป่วย", video: "https://res.cloudinary.com/pgbw4kx0/video/upload/v1792564481/%E0%B8%8D%E0%B8%B2%E0%B8%95%E0%B8%B4%E0%B8%84%E0%B8%99%E0%B9%84%E0%B8%82%E0%B9%89.mp4", explanation: "ครอบครัวหรือผู้ดูแลผู้ป่วย" }
];

/* =========================================
   2. VARIABLES
========================================= */

let questions = []; // เก็บโจทย์ 10 ข้อที่สุ่มมา
let player = "";
let currentQuestion = 0;
let correct = 0;
let streak = 0;
let bestStreak = 0;
let startTime = 0;
let timer = null;
let locked = false;

const RANKING_API =
    "https://script.google.com/macros/s/AKfycbxTB-EwExcTnCWd0kq_ohEaaRdR35t--RkY5cfD42Nx9wdQtCuq90HraHnp6Az0pMR21A/exec";

/* =========================================
   3. BAD WORD FILTER
========================================= */

const bad = [
    /เหี้ย/i,
    /ห่า/i,
    /สัส/i,
    /สัด/i,
    /ควย/i,
    /เย็ด/i,
    /แม่ง/i,
    /fuck/i,
    /shit/i,
    /bitch/i,
    /asshole/i,
    /dick/i,
    /pussy/i,
    /cunt/i,
    /bastard/i
];

/* =========================================
   4. LOAD PROFILE NAME
========================================= */

try {
    const profile = JSON.parse(localStorage.getItem("mkj-profile"));
    if (profile && profile.name) {
        document.getElementById("player").value = profile.name;
    }
} catch (error) {
    console.log("No profile found");
}

/* =========================================
   5. START GAME (สุ่ม 10 ข้อจากคลัง)
========================================= */

function startGame() {
    const input = document.getElementById("player");
    const error = document.getElementById("gameError");

    player = input.value.trim();
    error.textContent = "";

    if (!player) {
        error.textContent = "กรุณาใส่ชื่อก่อนเริ่มเกมค่ะ";
        input.focus();
        return;
    }

    if (bad.some(regex => regex.test(player))) {
        error.textContent = "กรุณาใช้ชื่อที่สุภาพค่ะ";
        input.focus();
        return;
    }

    // --- สุ่ม 10 ข้อสอบจากคลังศัพท์คำว่าอะไรบ้าง ---
    const shuffledPool = [...vocabularyPool].sort(() => Math.random() - 0.5);
    const selectedTen = shuffledPool.slice(0, 10);

    // --- สร้างโจทย์พร้อมสุ่มตัวเลือกหลอก 4 ข้อสำหรับแต่ละคำ ---
    questions = selectedTen.map(item => {
        let answerChoices = [item.meaning];
        
        // สุ่มคำอื่นจากคลังมาเป็นตัวเลือกหลอกจนครบ 4 ช้อยส์
        while (answerChoices.length < 4) {
            const randomItem = vocabularyPool[Math.floor(Math.random() * vocabularyPool.length)].meaning;
            if (!answerChoices.includes(randomItem)) {
                answerChoices.push(randomItem);
            }
        }

        return {
            meaning: item.meaning,
            answers: answerChoices,
            video: item.video,
            explanation: item.explanation
        };
    });

    currentQuestion = 0;
    correct = 0;
    streak = 0;
    bestStreak = 0;
    startTime = Date.now();
    locked = false;

    document.getElementById("intro").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");

    showQuestion();
}

/* =========================================
   6. SHOW QUESTION
========================================= */

function showQuestion() {
    locked = false;

    const q = questions[currentQuestion];
    const number = currentQuestion + 1;

    /* Question number */
    document.getElementById("qnum").textContent = `ข้อ ${number} / ${questions.length}`;

    /* Progress */
    const progress = (number / questions.length) * 100;
    document.getElementById("progressBar").style.width = `${progress}%`;

    /* Video */
    const video = document.getElementById("signVideo");
    const placeholder = document.getElementById("videoPlaceholder");

    video.pause();
    video.removeAttribute("src");
    video.load();

    if (q.video && q.video.trim() !== "") {
        video.src = q.video;
        video.style.display = "block";
        placeholder.style.display = "none";
        video.load();
        video.play().catch(() => {});
    } else {
        video.style.display = "none";
        placeholder.style.display = "block";
    }

    /* Answers */
    const answers = document.getElementById("answers");
    answers.innerHTML = "";

    const shuffled = [...q.answers].sort(() => Math.random() - 0.5);

    shuffled.forEach(answerText => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "answer-btn";
        button.textContent = answerText;

        button.addEventListener("click", () => answer(answerText, button));
        answers.appendChild(button);
    });

    /* Feedback */
    document.getElementById("feedback").textContent = "";
    document.getElementById("feedback").className = "feedback";

    updateStreak();
}

/* =========================================
   7. ANSWER
========================================= */

function answer(selected, clickedButton) {
    if (locked) return;

    const q = questions[currentQuestion];
    const buttons = document.querySelectorAll(".answer-btn");

    locked = true;

    /* ปิดปุ่มทั้งหมด */
    buttons.forEach(button => {
        button.disabled = true;
    });

    /* CORRECT */
    if (selected === q.meaning) {
        correct++;
        streak++;

        if (streak > bestStreak) {
            bestStreak = streak;
        }

        clickedButton.classList.add("correct");

        const feedback = document.getElementById("feedback");
        feedback.textContent = `✓ ถูกต้องค่ะ ${q.explanation}`;
        feedback.classList.remove("bad");
        feedback.classList.add("good");

        buttons.forEach(button => {
            if (button.textContent === q.meaning) {
                button.classList.add("correct");
            }
        });

        updateStreak(true);
    } 
    /* WRONG */
    else {
        streak = 0;

        clickedButton.classList.add("wrong");

        const feedback = document.getElementById("feedback");
        feedback.textContent = `ยังไม่ถูกค่ะ คำตอบที่ถูกคือ “${q.meaning}”`;
        feedback.classList.remove("good");
        feedback.classList.add("bad");

        buttons.forEach(button => {
            if (button.textContent === q.meaning) {
                button.classList.add("correct");
            }
        });

        updateStreak(false);
    }

    /* ไปข้อถัดไป */
    setTimeout(() => {
        currentQuestion++;

        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            finishGame();
        }
    }, 1200);
}

/* =========================================
   8. STREAK
========================================= */

function updateStreak(animate = false) {
    const element = document.getElementById("streak");
    element.textContent = `🔥 Streak ${streak}`;

    if (animate) {
        element.classList.add("hot");
        setTimeout(() => {
            element.classList.remove("hot");
        }, 400);
    }
}

/* =========================================
   SEND SCORE TO GOOGLE SHEETS
========================================= */

function sendScoreToServer(seconds) {
    const data = {
        name: player,
        score: correct,
        total: questions.length,
        time: seconds
    };

    fetch(RANKING_API, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(data),
        keepalive: true
    }).catch(error => {
        console.log("Ranking server error:", error);
    });
}

/* =========================================
   9. FINISH
========================================= */

function finishGame() {
    const seconds = Math.floor((Date.now() - startTime) / 1000);

    sendScoreToServer(seconds);
    clearInterval(timer);

    /* Save score */
    let scores = [];

    try {
        scores = JSON.parse(localStorage.getItem("mkj-scores") || "[]");
    } catch (error) {
        scores = [];
    }

    scores.push({
        name: player,
        correct: correct,
        time: seconds,
        streak: bestStreak,
        at: Date.now()
    });

    localStorage.setItem("mkj-scores", JSON.stringify(scores.slice(-50)));

    /* Hide quiz */
    document.getElementById("quiz").classList.add("hidden");

    /* Show result */
    const result = document.getElementById("result");
    result.classList.remove("hidden");

    let resultIcon = "🌱";
    let resultTitle = "เริ่มต้นได้ดีมากค่ะ";

    if (correct === questions.length) {
        resultIcon = "🏆";
        resultTitle = "สุดยอด! ถูกทุกข้อเลย";
    } else if (correct >= 7) {
        resultIcon = "✨";
        resultTitle = "เก่งมาก! ใกล้เต็มแล้ว";
    } else if (correct >= 5) {
        resultIcon = "🌟";
        resultTitle = "ทำได้ดีค่ะ";
    }

    result.innerHTML = `
        <div class="result-icon">
            ${resultIcon}
        </div>

        <p class="eyebrow">
            GAME COMPLETE
        </p>

        <h1>
            ${resultTitle}
        </h1>

        <p>
            ${escapeHtml(player)}
        </p>

        <div class="score-circle">
            <div class="score-number">
                ${correct}/${questions.length}
            </div>
            <div class="score-label">
                ตอบถูก
            </div>
        </div>

        <div class="result-stats">
            <div class="result-stat">
                <strong>
                    ${fmt(seconds)}
                </strong>
                <span>
                    เวลาที่ใช้
                </span>
            </div>

            <div class="result-stat">
                <strong>
                    🔥 ${bestStreak}
                </strong>
                <span>
                    Best Streak
                </span>
            </div>
        </div>

        <div class="result-buttons">
            <a href="leaderboard.html" class="primary button-link">
                🏆 ดูตารางจัดอันดับ
            </a>

            <button type="button" class="secondary" onclick="restartGame()">
                ↻ เล่นอีกครั้ง
            </button>
        </div>
    `;
}

/* =========================================
   10. RESTART
========================================= */

function restartGame() {
    document.getElementById("result").classList.add("hidden");
    document.getElementById("intro").classList.remove("hidden");
}

/* =========================================
   11. FORMAT TIME
========================================= */

function fmt(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(secs).padStart(2, "0")
    );
}

/* =========================================
   12. ESCAPE HTML
========================================= */

function escapeHtml(text) {
    return text.replace(
        /[&<>"']/g,
        character => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        })[character]
    );
}
