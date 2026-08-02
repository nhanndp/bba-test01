# Key Takeaways

## Git
### Cấu hình git
- config username: git config --global user.name "Nhan Nguyen"
- config email: git config --global user.email "phuocnhan1994@gmail.com"
- config default branch, nếu không chạy lệnh này thì nó sẽ là nhánh master: git config --global init.defaultBranch main

### SSH		
#### Tạo ssh key 
- mặc định không cần password, cứ enter khi run command
- nếu là personal laptop key: ssh-keygen -t ed25519 -C "phuocnhan1994@gmail.com" -f ~/.ssh/id_ed25519_personal
- nếu là company key (chỉ là thử thôi, chứ ko phải công ty thật): ssh-keygen -t ed25519 -C "fiona.nguyen.220@gmail.com"

#### Add ssh
- Mở new terminal trên máy > run: cat ~/.ssh/id_ed25519.pub
- Sau đó copy ssh public key to git hub

### Tạo github repo

### Khởi tạo git
- Mở visual code > mở folder mà đã gởi tạo bằng command npm init playwright@latest > Mở new  terminal trong visualcode > run command
- git init     ===> chỉ cần run 1 lần cho 1 folder mới, câu lệnh này sẽ tạo 3 vùng working directory (chứa các file latest đang sửa), staging area (các file đã sẵn sàng), repository (các phiên bản)
- git add .     ===> câu lệnh này sẽ đưa các file từ working directory sang staging area
- git add <file_name> ===> 1 file
- git add <file1 file2 file3> ===> nhieu file
- git commit -m "tên phiên bản"    ===> câu lệnh này sẽ commit các file từ staging area sang repo, commit 2 sẽ hiển thị trên commit 1

### push code
- git remote add origin git@github.com:nhanndp/k24-demo1.git    
- git push origin main

### Check commit log
- Git log

### Commit message
- git commit -m "fix: message": sửa lỗi ở code có sẵn
- git commit -m "feat: code for testcase AUTH_001": feat - code thêm tính năng feature mới
- git commit -m "chore: việc vặt, others
- git commit --amend -m "new message": để thay đổi commit message 

### git restore
- git restore --staged <filename1> <filename2>: đưa file từ staging về working directory
- git restore --staged .: đưa all file từ staging về working directory

### git reset with HEAD
- HEAD là 1 con trỏ của GIT
- Ví dụ: Commit A -- Commit B -- Commit C -- Commit D (HEAD) : HEAD đang trỏ đến commit D
- git reset --soft HEAD~N: Nếu N=2, Chỉ di chuyển HEAD về commit B, giữ nguyên toàn bộ thay đổi trong staging và working directory của C và D.
- git reset HEAD~N: Nếu N=2, di chuyển HEAD về commit B, xoá thay đổi của C và D ở staging, giữ nguyên toàn bộ thay đổi trong working directory của C và D.
- git reset --hard HEAD~N: Nếu N=2, di chuyển HEAD về commit B, xoá thay đổi của C và D ở staging working directory của C và D.

### git branch
- git branch: check hiện tại có những branch nào và đang ở tại branch nào
- git branch <branchname>: tạo branch mới. Lưu ý: phải checkout về main trước rồi mới tạo
- git checkout <branchname>: chuyển sang nhánh nào đó
- git checkout -b <branchname>: tạo nhánh mới và chuyển về nhánh đó. Lưu ý: phải checkout về main trước rồi mới tạo

### git clone
- git clone <url>
- không chạy câu lệnh này từ visualcode, vào folder mà mình muốn clone cái folder trên github về, open in terminal và run lệnh
- url copy từ github > code > copy ssh
- git clone git@github.com:better-bytes-academy/k24-practice.git

### git pull
- Luôn switch về main và pull code mới nhất về
- git pull origin main

### git push
- git push origin <branchname>: câu lệnh này sẽ push nhánh của mình mới tạo từ nhánh main lên git hub

### create pull request
- vào pull request tab trên repo

## Playwright 
### Khởi tạo
- Để khởi tạo 1 dự án playwright: thư mục (right click > Open in Terminal)
- npm init playwright@latest

## Basic javascript
- Tạo 1 folder > file .js > code > terminal > run code: node folder/file_name
- Khai báo biến (variable), nếu có nhu cầu thay đổi:
- let variable_name = ""
- console.log(variable_name) //in value của biến ra
- sau khi dùng let cho 1 biến, ví dụ myName, nếu muốn biến đó có value khác thì không cùng dùng let nữa, chỉ cần variable_name = "" là được
- khai báo hằng (constant) nếu không có nhu cầu thay đổi
- const const_name = "";
- console.log(const_name);
- khác với variable, const không thể thay đổi, không thể viết const_name = "" nếu đã khai báo nó là 1 value khác trước đó
### Object
- nên dùng literal
- const infor = {    name: "Nhan",    address: "Da Nang"}
- let infor = {    name: "Nhan",    address: "Da Nang"}
- nếu ko dùng literal thì dùng new object
- nếu key có chứa dấu cách (vd: my name) thì phải viết const infor = {    "my name": "Nhan",    address: "Da Nang"} hoặc 'my name"
- console.log(infor.name);
- console.log(infor.address);
- console.log(infor['name']);
- console.log(infor['address']);
### Array
- literal (nen dung): const destinations = ["Korea", "China"]; //khai bao ten bien so nhieu
- Mỗi phần tử trong array có vị trí (index) bắt đầu từ 0
- new array (khong nen dung): let traiCay = new Array("Tao","Cam");
- length: console.log(monHoc.length); // in ra so luong phan tu, tinh tu 1
### Function
### console.log
- ${} chỉ hoạt động khi chuỗi được bao bằng dấu backtick (`), không phải dấu nháy đơn ' hay nháy kép ".
- console.log("Bat dau tinh dien tich hinh chu nhat: ", dai, "x", rong);
- console.log(`Bat dau tinh dien tich hinh chu nhat: ${dai} x ${rong}`);

## Case convention
- tên file: kebab-case
- tên biến: camelCase
- tên class: PascalCase
- hằng số: UPPER_CASE
- snake_case: most in python

## Others
- pwd: lệnh này sẽ cho biết đường dẫn vào folder /Users/nhannguyen/Documents/playwright-typescript/k24-practice
- sau khi merge commit trên github vào main và xoá đi branch của mình ví dụ 20-nhan trên github, thì chỉ xoá ở github thôi, chứ dưới local vẫn sẽ còn branch đó và vẫn dùng nó để run git push origin <branch đó>.
- muốn xoá branch dưới local phải checkout về main trước mới xoá: git branch -D <branch>