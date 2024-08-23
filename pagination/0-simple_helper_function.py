#!/usr/bin/env python3
"""
This module provides helper functions for pagination tasks.
"""

def index_range(page, page_size):
    """
    Calculate the start and end indexes for a given page and page size.
    """
    tup = ()
    start = (page - 1) * page_size
    end = start + page_size
    tup = (start, end)

    return tup
