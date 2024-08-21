#!/usr/bin/env python3
"""
This module provides a coroutine function that uses asynchronous comprehension
to collect.

Functions:
    async_comprehension: Collects and returns 10 random numbers generated
    asynchronously.
"""
import asyncio
from typing import List
async_generator = __import__("0-async_generator").async_generator


async def async_comprehension() -> List[float]:
    """
    Collects 10 random numbers using async comprehension over async_generator.

    Returns:
        list of float: A list containing 10 random floating-point numbers.
    """
    return [num async for num in async_generator()]
