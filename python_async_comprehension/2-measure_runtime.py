#!/usr/bin/env python3
"""
This module measures the runtime of executing async comprehensions \
in parallel.

Functions:
    measure_runtime: Measures the total runtime of running \
    async_comprehension four times in parallel.
"""
import asyncio
import time
async_comprehension = __import__("1-async_comprehension").async_comprehension


async def measure_runtime() -> float:
    """
    Executes async_comprehension four times in parallel and measures \
    the total runtime.

    Returns:
        float: The total runtime taken to execute the four \
        async comprehensions.
    """
    start_time = time.time()
    await asyncio.gather(async_comprehension())
    end_time = time.time()
    run_time = end_time - start_time
    return run_time