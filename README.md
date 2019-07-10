# ![alt text](./icons8-kiwi-80.png) react-kiwi-dropdown

A minimal, easy-to-use and highly adjustable dropdown component made with React and styled-components.

## Props

There's only two required props, **options** and **onChange**.

| Name                        | Type                 | Description                                    |
| --------------------------- | -------------------- | ---------------------------------------------- |
| options                     | array                | An array containing option objects\*           |
| selectedOption              | string               | The currently selected value                   |
| onChange                    | function             | Function to call on change                     |
| customContainerStyle        | template string      | Custom styles to component container           |
| buttonLabel                 | string               | Button text                                    |
| buttonIndicator             | boolean              | Show selected indicator on button              |
| buttonArrow                 | 'single' or 'double' | Arrow style, single or double                  |
| customButtonStyle           | template string      | Custom button style                            |
| customButtonIndicatorStyle  | template string      | Custom button indicator style                  |
| checkedButtonIndicatorStyle | template string      | Custom button indicator style when checked     |
| customOptionListStyle       | template string      | Custom option list style                       |
| customOptionStyle           | template string      | Custom option object style                     |
| selectedOptionIcon          | any                  | Custom icon for selected option                |
| selectedOptionStyle         | template string      | Custom option object style for selected option |

## Option object

| Name  | Type   | Description         | Required |
| ----- | ------ | ------------------- | -------- |
| value | string | Option value        | required |
| text  | string | Option display text | required |
| icon  | any    | Any component       |

## Examples

https://flamboyant-noether-f6a6d9.netlify.com/
