// https://leetcode.com/problems/rising-temperature/?envType=study-plan-v2&envId=top-sql-50

-- Write your PostgreSQL query statement below
select id
from (
    select b.id,
      b.temperature - a.temperature as diff
    from weather b
      join weather a on a.recorddate = b.recorddate - interval '1 day'
  )
where diff > 0