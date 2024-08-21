#!/usr/bin/env python3
"""
This module contains an asynchronous generator function
that produces a series of random floating-point numbers.
"""

import random
import asyncio
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    Asynchronously generates and yields 10 random floating-point
    numbers between 0 and 10, with a 1-second delay between each.

    Yields:
        float: A random floating-point number between 0 and 10.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
