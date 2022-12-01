import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react"
import { describe, expect } from "vitest"
import {LessonFifteen} from "./lessons/LessonFifteen"

describe('Aula 15 component', () => {
    it('Deveria ser renderizado em tela', () =>{

        const { getByText } = render(<LessonFifteen />)

        expect(getByText('Cadastrar endereços')).toBeInTheDocument()
    })
})