import { sample_antiques, sample_tags } from "../data";

export const getAll = async () => sample_antiques;

export const search = async (searchTerm) => sample_antiques.filter(a => a.name.toLowerCase().includes(searchTerm.toLowerCase()))

export const getAllTags = async () => sample_tags;

export const getAllByTag = async (tag) => {
    if (tag === 'всички') return getAll();
    return sample_antiques.filter(item => item.tags?.includes(tag))
}