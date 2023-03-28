export { }

// const a: number = 10
// const b: number = 20

// let user: string;
// user = 123;
// user = "123";
// console.log(a + b);
// const isAdmin: boolean = true;

// const arrNumber: number[] = [1, 2, 3]
// const arrStr: string[] = ["1224234", 'b']
// const arrMix: Array<number | string | boolean> = [1, "abc", true]
// console.log(arrMix);

// const user: { id: number, username: string } = {
//     id: 1,
//     username: "datdeptrai"
// }
// console.log(user);
// const a = 10;
// const b = 20;
// console.log(a + b);

// function sum(a: number, b: number): number {
//     let result = a + b
//     return result
// }
// sum(10, 20)






// định nghĩa kiểu dữ liệu với interface

/* Object */
// Ví dụ khi chưa sử dụng interface
// const project: { id: number, name: string, image: string, link: string, status: boolean } = {
// định nghĩa kiểu dữ liệu cho 1 object
//     id: 1,
//     name: "Du an 1",
//     image: "https://picsum.photos/200/200",
//     link: "https://picsum.photos/200/200",
//     status: true
// }
// const getData = (props: { id: number, name: string, image: string, link: string, status: boolean }): { id: number, name: string, image: string, link: string, status: boolean } => {
//     console.log(props);
//     return props
// }
// getData(project)

interface Project { //khởi tạo 1 interface dành cho object và đặt tên là Project (lưu ý tên interface viết hoa chữ cái đầu)
    // trong interface Project chúng ta định nghĩa ra những thuộc tính có trong object mà mình muốn
    id: number | string, //toán tử hoặc cho phép lựa chọn kiểu dữ liệu mà thuộc tính đó có thể nhận vào
    name: string,
    image: string,
    email?: string //toán tử ? (optional) - cho phép thuộc tính đó có thể có hoặc không
}
const getData = (props: Project): Project => { //áp dụng interface Project vào để quy định kiểu dữ liệu cho tham số truyền vào và kiểu dữ liệu trả về của function
    return props
}
const project: Project = {
    id: "1",
    name: "abc",
    image: "http://..."
}
getData(project)

/* Array - Mảng*/

// const projectList: { id: number, name: string }[] = [
//     { id: 1, name: "Du an mau" },
//     { id: 2, name: "Du an 1" }
// ]

// const get = (data: { id: number, name: string }[]): { id: number, name: string }[] => {
//     return data
// }

// interface IProjectList {
//     id: number,
//     name: string
// }
// const projectList: Array<ProjectList> = [
//     { id: 1, name: "abcd" }
// ]
// const projectList: IProjectList[] = [
//     { id: 1, name: "Du an mau" },
//     { id: 2, name: "Du an 1" },
//     { id: 3, name: "Du an tot nghiep" }
// ]
/*
    tạo 1 hàm để hiển thị
    sử dụng map và hiển thị dữ liệu của mảng (console.log)
*/

/* Function */
// interface SumFunction {
//     (a: number, b: number): number
// }

// const sum: SumFunction = (a, b) => {
//     return a + b
// }
// sum(1, 20)

// định nghĩa kiểu dữ liệu với type
/* Object */
// type Product = {
//     id: number,
//     name: string
// }
// const getProduct = (props: Product): Product => {
//     return props
// }

/* Array */
// type TProductList = number[]
// const productList: TProductList = [1, 2, 3]
// trong trường hợp này đang báo lỗi, vậy xử lý lỗi này như thế nào -> buổi sau sẽ nói ahihi

/* Function */
// type TAddFunc = (a: number, b: number) => number


// interface IPerson {
//     email: string
// }

// interface IPerson {
//     id: number,
//     name: string
// }

// const sontv: IPerson = {
//     id: 1,
//     name: "abc",
//     email: "abc"
// }
// interface IEmployee extends IPerson {
//     position: string,
//     language: string
// }
// const sontv8: IEmployee = {
//     id: 1,
//     name: "sontv",
//     email: "anc",
//     position: "nhan vien",
//     language: "tieng Viet"
// }

// type TPerson = {
//     id: number,
//     name: string
// }
// type TEmployee = {
//     email: string
// }
// // type TManager = TPerson & TEmployee
// const datlt: TPerson & TEmployee = {
//     id: 1,
//     name: "datlt",
//     email: "abc"
// }


const projectList = [
    { id: 1, name: "Du an mau" },
    { id: 2, name: "Du an 1" }
]

const listProject = (projects) => {
    const app = document.querySelector("#app")
    if (app) {
        app.innerHTML = projects.map((item) => {
            return `
                Du an
            `
        }).join("")
    }
}