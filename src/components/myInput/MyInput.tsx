// function MyInput({ name, type, placeholder, label }) {
//     return (
//         <div>
//              <label htmlFor={name}>{label}</label>
//             <input
//                 name={name}
//                 type={type}
//                 placeholder={placeholder}
//             />
//         </div>
//     )
// }

// export default MyInput;

interface IMyInputProps {
  name: string;
  type: string;
    placeholder?: string;
    label: string;
}

function MyInput({ name, type, placeholder, label }: IMyInputProps) {
    return (
        <div>
             <label htmlFor={name}>{label}</label>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
            />
        </div>
    )
}

export default MyInput;