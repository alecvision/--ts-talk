import { Plugin, unified } from "unified";
import { visit } from "unist-util-visit";
import {Root} from 'mdast'

const myPlugin: Plugin<[], Root> = () => {
    return (tree, file) => {
        if (!tree !== 'mdast') {
            throw new Error()
        }
        visit(tree, 'paragraph', (s, s) => {

        })
    }
}