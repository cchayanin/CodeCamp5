## CodeCamp # 5

## ชญานิน ชลหาญ

### กรณีมี conflict

- สร้าง branch ใหม่

- แก้ไข file .txt ใน master  
  ![master](master.png)

- push ขึ้น repo

- สลับไป branch ที่สร้างเมื่อกี้

- แก้ไข file.txt ให้ไม่เหมือนใน master  
  ![rebase](rebase.png)

- push ขึ้น repo

- ทำการ rebase เข้ากับ master
  ![conflict](conflict.png)  
  ![continue](continue.png)

### กรณี ไม่มี conflict

- สลับมา branch ใหม่

- แก้ไขไฟล์ .txt  
  ![edit2](edit2.png)

- push ขึ้น repo

- ทำการ rebase เข้ากับ master อีกรอบ  
  ![rebase2](rebase2.png)
