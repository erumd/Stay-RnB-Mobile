// // https://github.com/EAT-CODE-KITE-REPEAT/expo-data-forms

// import React from 'react';
// // import NativeForms from 'native-forms-react';
// import { DataForm, Field } from '../wrappers/DataForms';

// class Example extends React.Component {
//   render() {
//     const fields = [
//       { field: 'simpleImage', type: 'simpleImage' },
//       {
//         field: 'selectOne',
//         title: 'Bedroom',
//         type: 'selectOne',
//         values: [
//           { value: 1, label: '1' },
//           { value: 2, label: '2' },
//           { value: 3, label: '3' },
//           { value: 4, label: '4 or more' },
//           { value: 5, label: 'shared' },
//         ],
//       },
//       {
//         field: 'selectOne',
//         title: 'Bathroom',
//         type: 'selectOne',
//         values: [
//           { value: 1, label: '1' },
//           { value: 2, label: '2' },
//           { value: 3, label: '3' },
//           { value: 4, label: '4 or more' },
//           { value: 5, label: 'shared' },
//         ],
//       },
//       {
//         field: 'selectOne',
//         title: 'Type of housing?',
//         type: 'selectOne',
//         values: [
//           { value: 1, label: 'Apartment' },
//           { value: 2, label: 'House' },
//           { value: 3, label: 'Condo' },
//           { value: 4, label: 'Studio' },
//           { value: 5, label: 'Extended Stay Hotel' },
//           { value: 6, label: 'Other' },
//         ],
//       },
//       { field: 'numbers', title: 'Zip Code', type: 'numbers' },
//       {
//         field: 'selectOne',
//         title: 'Is this a shared space?',
//         type: 'selectOne',
//         values: [
//           { value: 1, label: 'Yes' },
//           { value: 2, label: 'No' },
//         ],
//       },
//       { field: 'numbers', title: 'Price Per Month', type: 'numbers' },
//       // { field: "date", title: "Date Available", type: "date" },
//       { field: 'text', title: 'Date Available' },
//       {
//         field: 'selectOne',
//         title: 'Pets Allowed',
//         type: 'selectOne',
//         values: [
//           { value: 1, label: 'Yes' },
//           { value: 2, label: 'No' },
//         ],
//       },
//       {
//         field: 'selectOne',
//         title: 'Parking',
//         type: 'selectOne',
//         values: [
//           { value: 1, label: 'Attached Garage' },
//           { value: 2, label: 'Lot' },
//           { value: 3, label: 'Street' },
//           { value: 4, label: 'Other' },
//         ],
//       },
//       {
//         field: 'selectOne',
//         title: 'Washer and Dryer',
//         type: 'selectOne',
//         values: [
//           { value: 1, label: 'Yes' },
//           { value: 2, label: 'No' },
//         ],
//       },
//       {
//         field: 'selectOne',
//         title: 'WiFi',
//         type: 'selectOne',
//         values: [
//           { value: 1, label: 'Yes' },
//           { value: 2, label: 'No' },
//         ],
//       },
//       {
//         field: 'selectOne',
//         title: 'Stove',
//         type: 'selectOne',
//         values: [
//           { value: 1, label: 'Yes' },
//           { value: 2, label: 'No' },
//         ],
//       },
//     ];

//     const addListingPage = () => {
//       return (
//         <View style={{ flex: 1 }}>
//           <DataForm
//             fields={fields}
//             onComplete={() => Alert.alert('Listing Added')}
//             //here you can put a graphql or redux mutation
//             mutate={(vars) =>
//               new Promise((resolve, reject) => {
//                 console.log('vars', vars);
//                 resolve({ data: 'some data from mutation' });
//               })
//             }
//             values={{
//               // this can come from a graphql query
//               simpleImage: '',
//               text: '',
//               textArea: '',
//               numbers: '',
//               selectOne: '',
//               categories: '',
//             }}
//           />
//         </View>
//       );
//     };
//   }
// }

// export default addListingPage; 
