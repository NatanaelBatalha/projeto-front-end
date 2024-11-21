import { useState } from "react";
import styled from "styled-components";
import { Checkbox } from 'primereact/checkbox';


// const ProducOptionsContainer = styled.nav`
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     padding: 30px;
//     gap: 20px;

//     position: absolute;
//     width: 308px;
//     height: 720px;
//     left: 100px;
//     top: 332px;

//     background: #f7a3a3;
//     border-radius: 4px;

//     .frameTotal1 {
//         display: flex;
//         flex-direction: column;
//         align-items: flex-start;
//         padding: 0px;
//         gap: 10px;

//         width: 109px;
//         height: 182px;

//         /* Inside auto layout */
//         flex: none;
//         order: 2;
//         flex-grow: 0;
//     }
//     .filtro {
//         font-family: 'Inter';
//         font-style: normal;
//         font-weight: 700;
//         font-size: 16px;
//         line-height: 24px;
//         letter-spacing: 0.75px;

//         /* dark-gray-2 */
//         color: #474747;

//     }
//     .frameTexto {
//         display: flex;
//         flex-direction: row;
//         align-items: center;
//         padding: 0px;
//         gap: 10px;

//         width: 89px;
//         height: 22px;


//         /* Inside auto layout */
//         flex: none;
//         order: 1;
//         flex-grow: 0;

//     }
//     .texto {
//         width: 57px;
//         height: 22px;

//         /* Text X-Small - Desktop */
//         font-family: 'Inter';
//         font-style: normal;
//         font-weight: 500;
//         font-size: 14px;
//         line-height: 22px;
//         /* identical to box height, or 157% */
//         letter-spacing: 0.25px;

//         /* dark-gray-2 */
//         color: #474747;


//         /* Inside auto layout */
//         flex: none;
//         order: 1;
//         flex-grow: 0;
//     }
// `

// const ProductOptions = () => {
//     const [checked, setChecked] = useState(false)
//     return ( 
//         <ProducOptionsContainer>
//             <nav>
//                 <p className="filtro">Filtrar por</p>
//                 <hr />
//                 <div className="frameTotal1">
//                     <p className="filtro">Marka</p>
//                     <div className="frameTexto">
//                         <p className="texto">Adiddas</p>
//                         <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
//                     </div>
//                     <div className="frameTexto">
//                         <p className="texto">Calenciaga</p>
//                         <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
//                     </div>
//                     <div className="frameTexto">
//                         <p className="texto">K-Swiss</p>
//                         <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
//                     </div>
//                     <div className="frameTexto">
//                         <p className="texto">Nike</p>
//                         <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
//                     </div>
//                     <div className="frameTexto">
//                         <p className="texto">Puma</p>
//                         <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
//                     </div>
//                 </div>
//                 <div>oi</div>
//                 <div>oi</div>
//                 <div>oi</div>
//             </nav>
//         </ProducOptionsContainer>
//      );
// }
 
// export default ProductOptions;



const ProductOptions = () => {
    
    const categories = [
        { name: 'Addidas', key: 'A' },
        { name: 'Calenciaga', key: 'C' },
        { name: 'K-Swiss', key: 'K' },
        { name: 'Nike', key: 'N' },
        { name: 'Puma', key: 'P' }
    ];
    const [selectedCategories, setSelectedCategories] = useState([categories[0]]);

    const onCategoryChange = (e) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked)
            _selectedCategories.push(e.value);
        else
            _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

        setSelectedCategories(_selectedCategories);
    };
    return ( 
        <>
            <div>
            <div>
                {categories.map((category) => {
                    return (
                        <div key={category.key} className="flex align-items-center">
                            <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
                            <label htmlFor={category.key} className="ml-2">
                                {category.name}
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
        </>
     );
}
 
export default ProductOptions;