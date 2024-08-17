#!/usr/bin/env python3
"""
This module provides an asynchronous coroutine `wait_n`
that spawns multiple `wait_random` tasks and returns
their sorted delays.
"""
import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Spawns wait_random n times with the specified max_delay."""
    delays = await asyncio.gather(*[wait_random(max_delay) for _ in range(n)])
    return sorted(delays)
