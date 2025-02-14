import styled from "@emotion/styled";

export const ListWrapper = styled.div`
  box-sizing: border-box;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 10px;

  & .list {
    position: relative;
    width: 100%;
    height: 100%;
  }
  & .list .total {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  & .list ul li.list-0 {
    // margin-top: 50px;
  }
  & .list ul {
    margin-top: 50px;
    max-height: 280px;
    padding: 10px;
    overflow-y: scroll;
  }
  & .list ul::-webkit-scrollbar {
    width: 10px;
    height: 20px;
    margin-left: 5px;
  }
  & .list ul::-webkit-scrollbar-thumb {
    background: rgb(144, 182, 21);
    border-radius: 12px 12px 12px 12px;
  }
  & .list ul li {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 20px;
    position: relative;
  }
  & .list ul li p:nth-of-type(odd)::after {
    content: "|";
    display: inline-block;
    text-align: right;
    position: absolute;
    right: 50%;
    color: #fff;
  }
`;
export const HomeWrapper = styled.div`
  & .home {
    box-sizing: border-box;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #000;
    border-radius: 4px;
    padding: 10px;
  }
`;
export const ControllerWrapper = styled.div`
  & .controller {
    box-sizing: border-box;
    height: 350px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid #000;
    padding: 10px;
    border-radius: 5px;
  }
  & .controller .question,
  & .controller .answer {
    display: flex;
    flex-direction: column;
  }
  & .controller .question input[type="text"] {
    display: flex;
    flex-direction: column;
  }
  & .controller .question input[type="text"] {
    min-height: 80px;
    border-radius: 5px;
    height: auto;
  }
  & .controller .answer {
    min-height: 80px;
    border-radius: 5px;
  }
  & .controller .answer textarea {
    resize: none;
    border-radius: 5px;
  }
  & .controller .save {
    display: flex;
    justify-content: flex-end;
  }
  & .controller .save button[type="button"] {
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 5px;
    font-weight: 500;
  }
  & .controller .warning {
    padding-top: 4px;
    color: #482c2c;
    font-size: 10px;
  }
`;
export const ViewerWrapper = styled.div`
  & .viewer {
    height: 350px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
export const LoginWrapper = styled.div`
  & form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
export const RegisterWrapper = styled.div``;
