import React from "react";
import styled from 'styled-components'
import {colors} from "../../../Helpers/UI/constants";

export default function Field({input, label, onChange}) {

    switch (input.type) {
        case 'textarea': {
            return (
                <FieldWrapper>
                    <Label>{label}</Label>
                    <Textarea
                        onChange={onChange}
                        minWidth="320px"
                        autoComplete="off"
                        {...input}
                    />
                </FieldWrapper>
            );
        }

        default: {
            return (
                <FieldWrapper>
                    <Label>{label}</Label>
                    <Input
                        onChange={onChange}
                        minWidth="320px"
                        autoComplete="off"
                        {...input}
                    />
                </FieldWrapper>
            );
        }
    }
}

const FieldWrapper = styled.div`
  background-color: ${colors.gray2};
  padding: 16px;
  border-radius: 4px;
  margin: 8px 0;
`
const Input = styled.input`
  display: block;
  background: inherit;
  height: 24px;
  border: none;
  outline: none;
  font-family: Roboto, sans-serif;
  font-size: 18px;
  line-height: 120%;
  color: ${colors.white};
  
  &:focus{
    border-left: 4px solid #FC8831;
    padding-left: 4px;
  }

`

const Textarea = styled.textarea`
  
`
const Label = styled.label`
  display: inline-block;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 10px;
  line-height: 140%;
  color: ${colors.white};
  margin-bottom: 8px;
`