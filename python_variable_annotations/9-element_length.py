#!/usr/bin/env python3
"""
This module provides a function to calculate the
length of elements in an iterable.
"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Returns a list of tuples where each tuple contains an element
    from the iterable and its length.
    """
    return [(i, lem(i)) for i in lst]
