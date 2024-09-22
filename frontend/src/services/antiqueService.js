import { sample_antiques } from "../data";

export const getAll = async () => sample_antiques;

export const search = async (searchTerm) => sample_antiques.filter(a => a.name.toLowerCase().includes(searchTerm.toLowerCase()))
