import React from "react";
import {
    List,
    Datagrid,
    TextField,
    Edit,
    SimpleForm,
    EditButton,
    TextInput,
    Create,
    SelectInput,
    required,


} from "react-admin";

export  const listCategory = (props) =>(
    <List {...props} sortBy="id" sortOrder="ASC">
        <Datagrid>
            <TextField source ="id"/>
            <TextField source ="name"/>
            <TextField source ="isHome"/>
            <EditButton/>
        </Datagrid>
    </List>

);

export  const editCategory = (props) =>(

    
    <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required()} /> {/* Áp dụng ràng buộc */}
      <SelectInput
        source="isHome"
        choices={[
          { id: 1, name: "Hiển thị ở trang chủ", value: 1 },
          { id: 2, name: "Ẩn khỏi trang chủ", value: 0 },
        ]}
        defaultValue={0}
      />
    </SimpleForm>
  </Edit>
    
);

export const createCategory = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required()} /> {/* Áp dụng ràng buộc */}
      <SelectInput
        source="isHome"
        choices={[
          { id: 1, name: "Hiển thị ở trang chủ", value: 1 },
          { id: 2, name: "Ẩn khỏi trang chủ", value: 0 },
        ]}
        defaultValue={0}
      />
    </SimpleForm>
  </Create>
);