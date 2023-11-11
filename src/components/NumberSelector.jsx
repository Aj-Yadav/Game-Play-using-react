import styled from "styled-components"

const NumberSelector = ({selectedNum, setSelectedNum,error,setError}) => {
    const arrNum = [1,2,3,4,5,6];
    // console.log(selectedNum);

    const NumberSelectorHandler = (value) => {
        setSelectedNum(value);
        setError("")
    }

  return (
        <NumberSelectContainer>
            <p className="error">  {error}</p>
    <div className='flex'>
      

        {
            arrNum.map((value,i) => (
                <Box 
                isselected = { value === selectedNum}
                key={i} 
                // onClick={()=> setSelectedNum(value)}>
                onClick={() => NumberSelectorHandler(value)}>
                {value}
            </Box>
            ))
        }
{/* 
        <Box>1</Box>  <Box>2</Box>  <Box>3</Box>  <Box>4</Box>  <Box>5</Box>  <Box>  6</Box> */}
    </div>
    <p> Select Numbar</p>
  </NumberSelectContainer>
  )
}

export default NumberSelector;

const NumberSelectContainer = styled.div `
display: flex;
flex-direction: column;
align-items: end;
.error{
    color:red;
}

    .flex{ 
    display: flex;
    gap: 24px;
    font-size: 24px;
    font-weight:700;
    }
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.isselected ? "black" : "white")};
    color: ${(props) => (!props.isselected ? "black" : "white")};
    /* color: ${(props) => (props.isselected ? "white" : "black")} */
`