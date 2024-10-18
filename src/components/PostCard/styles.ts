import styled from 'styled-components';

export const StyledPostCard = styled.div`
    display: flex;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    max-width: 80%;
    margin: 16px;
`;

export const Wrapper = styled.div`
    display: flex;
    position: relative;
    width: 100%;
`;

export const StyledImage = styled.img`
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin-right: 16px;
`;

export const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    padding: 8px;
`;

export const StyledTitle = styled.h3`
    font-size: 1.1em;
    margin: 0;
    padding: 0;
`;

export const StyledPrice = styled.span`
    font-size: 1.2em;
    color: #1a73e8;
    font-weight: bold;
`;

export const StyledLocation = styled.span`
    color: #777;
    font-size: 0.9em;
`;

export const StyledTag = styled.span`
    background-color: #d1f5d3;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.8em;
    align-self: flex-start;
    margin-top: 4px;
`;

export const StyledTopTag = styled.span`
    background-color: #00bfa5;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.8em;
    position: absolute;
    top: 8px;
    left: 8px;
`;
